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

  return router;
};
