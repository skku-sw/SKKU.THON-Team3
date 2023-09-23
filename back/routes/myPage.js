const express = require('express');
const router = express.Router();
module.exports = (db) => {  
  //이력서 저장
  /*
  router.post('/save', (req, res) => {
    const requestData = req.body;
    console.log(requestData);
    db.query('INSERT INTO resume SET ?', requestData, (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        res.json(results);
      }
    });
  }*/

    //최근 지원한 공고 보기
    router.post('/recent', (req, res) => {
        const requestData = req.body;
        db.query(`SELECT apply.apply_id, apply.post_id, apply.user_nickname, apply.apply_date,
        posts.agency, posts.title, posts.content, posts.tag, posts.period,
        posts.num_recruit
        FROM apply
        INNER JOIN posts ON apply.post_id = posts.id
        WHERE apply.user_nickname = ?
        ORDER BY apply.apply_date DESC
        LIMIT 3;`, [requestData.nickname], (err, results) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
        } else {
            res.json(results);
        }
        });
    });

    router.post('/bookmark', (req, res) => {
        const requestData = req.body;
        db.query(`SELECT bookmark.post_id, posts.title, posts.content, posts.tag, posts.period, posts.num_recruit
        FROM bookmark
        INNER JOIN posts ON bookmark.post_id = posts.id
        WHERE bookmark.user_nickname = ?
        ORDER BY bookmark.created_at DESC;` ,[requestData.nickname], (err, results) => {
            if(err){
                console.error('쿼리 실행 오류:', err);
                res.status(500).send('데이터베이스 오류');
            }
            else{
                res.json(results);
            }
        });
    });
    
  return router; // 이 부분이 함수 밖으로 나와야 합니다.
};
