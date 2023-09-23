const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('map');
    res.send('map');
  }); 
  router.get('/mark', (req, res) => {
    db.query(`SELECT coordinate.*, posts.title, posts.content, posts.tag, posts.period, posts.num_recruit, posts.num_applicants, posts.working_hours, posts.salary, posts.created_at 
    FROM coordinate
    INNER JOIN posts ON coordinate.post_id = posts.id;`, (err, results) => {
      if(err){
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('마커 조회 실패');
      }
      else{
        res.json(results);
      }
    });
  });

  //add mark
  router.post('/mark/add', (req, res) => {
    var requestBody = req.body;
    db.query(`INSERT INTO coordinate (post_id, address, latitude, longitude) VALUES (?, ?, ?, ?)`, [requestBody.post_id, requestBody.address, requestBody.latitude, requestBody.longitude], (err, results) => {
      if(err){
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('마커 추가 실패');
      }
      else{
        res.status(200).send('마커 추가 성공');
      }
    });
  });

  //add post
  router.post('/post/add', (req, res) => {
    var requestBody = req.body;
    db.query(`INSERT INTO posts (agency ,title, content, tag, period, num_recruit, region, num_applicants, working_hours, salary, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?, now())`, [requestBody.agency, requestBody.title, requestBody.content, requestBody.tag, requestBody.period, requestBody.num_recruit, requestBody.region, requestBody.num_applicants, requestBody.working_hours, requestBody.salary], (err, results) => {
      if(err){
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('게시글 추가 실패');
      }
      else{
        res.status(200).send('게시글 추가 성공');
      }
    }
    );
  }
  );



  return router;
};
