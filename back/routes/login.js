const express = require('express');
const router = express.Router();

module.exports = (db) => {
    // POST 요청 처리 (회원가입)
    router.post('/join', (req, res) => {
        const { nickname, username, password, sex, category, age, phone_number } = req.body;

        // MySQL 쿼리를 사용하여 회원가입 정보 저장
        db.query(
          'INSERT INTO users (nickname, username, password, sex, category, age, phone_number) VALUES (?, ?, ?, ?, ?, ? ,?)',
          [nickname, username, password, sex, category, age, phone_number],
          (err, results) => {
            if (err) {
              console.error('쿼리 실행 오류:', err);
              res.status(500).send('회원가입 실패');
            } else {
              // 회원가입 성공
              // 이제 resume 테이블에도 데이터 추가
              db.query(
                'INSERT INTO resume (nickname, username, sex, category, age, phone_number) VALUES (?, ?, ?, ?, ?, ?)',
                [nickname, username, sex, category, age, phone_number],
                (err, results) => {
                  if (err) {
                    console.error('쿼리 실행 오류:', err);
                    res.status(500).send('회원가입 실패');
                  } else {
                    // resume 테이블에도 데이터 추가 성공
                    res.status(200).send('회원가입 및 이력서 작성 성공');
                  }
                }
              );
            }
          }
        );
    });

    // POST 요청 처리 (로그인)
    router.post('/', (req, res) => {
        console.log("login.js")
        const { nickname, password } = req.body;

        // MySQL 쿼리 실행하여 로그인 정보 확인
        db.query('SELECT * FROM users WHERE nickname = ? AND password = ?', [nickname, password], (err, results) => {
            console.log(req.body)
            if (err) {
                console.error('쿼리 실행 오류:', err);
                res.status(500).send('데이터베이스 오류');
            } else {
                if (results.length > 0) {
                    // 로그인 성공
                    console.log(results)
                    res.status(200).send('로그인 성공');
                } else {
                    // 로그인 실패
                    console.log(results)
                    res.status(400).send('로그인 실패');
                }
            }
        });
    });

    return router;
};