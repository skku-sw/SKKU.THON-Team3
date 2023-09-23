const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // POST 요청 처리 (북마크 추가)
  router.post('/bookmark/:postId', (req, res) => {
    const postId = req.params.postId;
    const userNickname = req.body.userNickname;
    const createdAt = new Date(); // 현재 시각 얻기

    // 이미 북마크가 추가되어 있는지 확인
    const checkBookmarkQuery = 'SELECT * FROM bookmark WHERE post_id = ? AND user_nickname = ?';
    db.query(checkBookmarkQuery, [postId, userNickname], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        if (results.length === 0) {
          // 북마크 추가
          const insertBookmarkQuery = 'INSERT INTO bookmark (post_id, user_nickname, created_at) VALUES (?, ?, ?)';
          db.query(insertBookmarkQuery, [postId, userNickname, createdAt], (err, results) => {
            if (err) {
              console.error('쿼리 실행 오류:', err);
              res.status(500).send('데이터베이스 오류');
            } else {
              res.status(200).send('북마크가 추가되었습니다.');
            }
          });
        } else {
          // 이미 북마크가 추가되어 있음
          res.status(400).send('이미 북마크가 추가되어 있습니다.');
        }
      }
    });
  });

  // DELETE 요청 처리 (북마크 제거)
  router.delete('/bookmark/:postId', (req, res) => {
    const postId = req.params.postId;
    const userNickname = req.body.userNickname;

    // 북마크 제거
    const deleteBookmarkQuery = 'DELETE FROM bookmark WHERE post_id = ? AND user_nickname = ?';
    db.query(deleteBookmarkQuery, [postId, userNickname], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        res.status(200).send('북마크가 제거되었습니다.');
      }
    });
  });

  router.get('/search', (req, res) => {
    const searchTerm = req.query.searchTerm; // 검색어를 쿼리 매개변수로 받아옴

    // 검색 쿼리 작성
    const sqlQuery = `
      SELECT posts.*, COUNT(apply.apply_id) AS num_applicants
      FROM posts
      LEFT JOIN apply ON posts.id = apply.post_id
      WHERE posts.title LIKE ? OR posts.content LIKE ? OR posts.region LIKE ?
      GROUP BY posts.id
    `;
  
    // 검색 쿼리 실행
    db.query(sqlQuery, [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        if (results.length > 0) {
          // 검색 결과를 클라이언트에 전송
          res.status(200).json(results);
        } else {
          res.status(400).send('검색된 결과가 없습니다.');
        }
      }
    });
  });

  // GET /posts/tag/:tag 엔드포인트
  router.get('/tag/:tag', (req, res) => {
    const tag = req.params.tag; // 요청에서 태그 파라미터 추출

    // "posts" 테이블에서 해당 태그를 포함하는 게시물을 가져오는 쿼리 작성
    // % 기호를 사용하여 해당 태그가 어디에든 포함된 게시물을 검색
    const query = `
      SELECT posts.*, COUNT(apply.apply_id) AS num_applicants
      FROM posts
      LEFT JOIN apply ON posts.id = apply.post_id
      WHERE posts.tag LIKE ?
      GROUP BY posts.id
    `;

    // 데이터베이스에서 게시물을 조회
    db.query(query, [`%${tag}%`], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        // 결과를 JSON 형식으로 응답
        if(results.length > 0) {
          res.status(200).json(results);
        }
        else{
          res.status(400).send('검색된 결과가 없습니다.');
        }
      }
    });
  });

  // GET 요청 처리 (모든 게시물 가져오기)
  router.get('/', (req, res) => {
    // 게시물과 지원 테이블을 조인하고 COUNT를 사용하여 지원자 수 계산
    const query = `
    SELECT posts.*, COUNT(apply.apply_id) AS num_applicants
    FROM posts
    LEFT JOIN apply ON posts.id = apply.post_id
    GROUP BY posts.id
    `;

    // 데이터베이스에서 게시물 및 지원자 수 조회
    db.query(query, (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        // 결과를 JSON 형식으로 응답
        res.json(results);
      }
    });
  });

  

  // POST 요청 처리 (게시물 추가)
  // router.post('/', (req, res) => {
  //   const { agency, title, content, tag, period, num_recruit } = req.body;

  //   // 새 게시물을 추가하기 위한 INSERT 쿼리
  //   const insertQuery = 'INSERT INTO posts (agency, title, content, tag, period, num_recruit) VALUES (?, ?, ?, ?, ?, ?)';

  //   // INSERT 쿼리 실행
  //   db.query(
  //     insertQuery,
  //     [agency, title, content, tag, period, num_recruit],
  //     (err, results) => {
  //       if (err) {
  //         console.error('쿼리 실행 오류:', err);
  //         res.status(500).send('데이터베이스 오류');
  //       } else {
  //         // 새로 추가된 게시물의 ID를 반환
  //         const newPostId = results.insertId;
  //         res.json({ id: newPostId, message: '게시물이 추가되었습니다.' });
  //       }
  //     }
  //   );
  // });

  return router;
};
