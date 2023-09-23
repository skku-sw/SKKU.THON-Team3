const express = require('express');
const router = express.Router();

module.exports = (db) => {
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
          res.send('로그인 성공');
        } else {
          // 로그인 실패
          console.log(results)
          res.send('로그인 실패');
        }
      }
    });
  });

    // POST 요청 처리 (회원가입)
    router.post('/join', (req, res) => {
        const { nickname, username, password, sex, category } = req.body;

        // MySQL 쿼리를 사용하여 회원가입 정보 저장
        db.query('INSERT INTO users (nickname, username, password, sex, category) VALUES (?, ?, ?, ?, ?)', [nickname, username, password, sex, category], (err, results) => {
            if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('회원가입 실패');
            } else {
            // 회원가입 성공
            res.send('회원가입 성공');
            }
        });
    });
    

  return router;
};
