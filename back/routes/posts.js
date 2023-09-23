const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // GET 요청 처리 (모든 게시물 가져오기)
  router.get('/', (req, res) => {
    // "posts" 테이블에서 모든 게시물을 가져오는 쿼리
    const query = 'SELECT * FROM posts';

    // 데이터베이스에서 게시물을 조회
    db.query(query, (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      }else {
        // 결과를 JSON 형식으로 응답
        res.json(results);
      }
    });
  });

  // POST 요청 처리 (게시물 추가)
  router.post('/', (req, res) => {
    const { agency, title, content, tag, period, num_recruit } = req.body;

    // 새 게시물을 추가하기 위한 INSERT 쿼리
    const insertQuery = 'INSERT INTO posts (agency, title, content, tag, period, num_recruit) VALUES (?, ?, ?, ?, ?, ?)';

    // INSERT 쿼리 실행
    db.query(
      insertQuery,
      [agency, title, content, tag, period, num_recruit],
      (err, results) => {
        if (err) {
          console.error('쿼리 실행 오류:', err);
          res.status(500).send('데이터베이스 오류');
        } else {
          // 새로 추가된 게시물의 ID를 반환
          const newPostId = results.insertId;
          res.json({ id: newPostId, message: '게시물이 추가되었습니다.' });
        }
      }
    );
  });

  router.get('/search', (req, res) => {
    const searchTerm = req.query.searchTerm; // 검색어를 쿼리 매개변수로 받아옴
  
    // 검색 쿼리 작성
    const sqlQuery = `
      SELECT * FROM posts
      WHERE title LIKE ? OR content LIKE ?
    `;
  
    // 검색 쿼리 실행
    db.query(sqlQuery, [`%${searchTerm}%`, `%${searchTerm}%`], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        // 검색 결과를 클라이언트에 전송
        res.json(results);
      }
    });
  });

  return router;
};
