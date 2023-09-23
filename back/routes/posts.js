const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // GET 요청 처리 (특정 게시물 가져오기)
  router.get('/:postId', (req, res) => {
    const postId = req.params.postId; // 요청에서 게시물 ID 추출

    // "posts" 테이블에서 특정 ID의 게시물을 가져오는 쿼리 작성
    const query = 'SELECT * FROM posts WHERE id = ?';

    // 데이터베이스에서 게시물을 조회
    db.query(query, [postId], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        if (results.length > 0) {
          // 결과를 JSON 형식으로 응답
          res.status(200).json(results[0]);
        } else {
          res.status(400).send('게시물을 찾을 수 없습니다.');
        }
      }
    });
  });
  
  // POST 요청 처리 (게시물에 지원하기)
  router.post('/:postId', (req, res) => {
    const postId = req.params.postId; // 요청에서 게시물 ID 추출
    const userNickname = req.body.userNickname;
    const createdAt = new Date(); // 현재 시각 얻기

    // 이미 지원한 내역이 있는지 확인
    const checkApplyQuery = 'SELECT * FROM apply WHERE post_id = ? AND user_nickname = ?';
    db.query(checkApplyQuery, [postId, userNickname], (err, results) => {
      if (err) {
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('데이터베이스 오류');
      } else {
        if (results.length === 0) {
          // 해당 게시물의 num_applicants 가져오기
          const getNumApplicantsQuery = 'SELECT num_applicants, num_recruit FROM posts WHERE id = ?';
          db.query(getNumApplicantsQuery, [postId], (err, results) => {
            if (err) {
              console.error('쿼리 실행 오류:', err);
              res.status(500).send('데이터베이스 오류');
            } else {
              if (results.length > 0) {
                const { num_applicants, num_recruit } = results[0];

                if (num_applicants < num_recruit) {
                  // num_applicants가 num_recruit 미만인 경우에만 지원 가능
                  // 지원 내역 추가
                  const insertApplyQuery = 'INSERT INTO apply (post_id, user_nickname, apply_date) VALUES (?, ?, ?)';
                  db.query(insertApplyQuery, [postId, userNickname, createdAt], (err, results) => {
                    if (err) {
                      console.error('쿼리 실행 오류:', err);
                      res.status(500).send('데이터베이스 오류');
                    } else {
                      // 해당 게시물의 num_applicants를 1 증가
                      const updateNumApplicantsQuery = 'UPDATE posts SET num_applicants = num_applicants + 1 WHERE id = ?';
                      db.query(updateNumApplicantsQuery, [postId], (err, results) => {
                        if (err) {
                          console.error('쿼리 실행 오류:', err);
                        }
                      });

                      res.status(200).send('지원이 완료되었습니다.');
                    }
                  });
                } else {
                  // 이미 지원자가 num_recruit에 도달한 경우
                  res.status(400).send('이미 지원자 모집이 완료되었습니다.');
                }
              } else {
                // 해당 게시물이 존재하지 않는 경우
                res.status(404).send('게시물을 찾을 수 없습니다.');
              }
            }
          });
        } else {
          // 이미 지원한 내역이 있음
          res.status(400).send('이미 지원한 내역이 있습니다.');
        }
      }
    });
  });

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

  // GET 요청 처리 (검색 및 북마크 여부 포함)
  router.get('/search/:search', (req, res) => {
    const searchTerm = req.params.search; // 검색어를 쿼리 매개변수로 받아옴
    const userNickname = req.query.nickname; // 로그인한 사용자의 닉네임
    console.log(searchTerm, userNickname);

    // 1. 해당 사용자가 북마크한 게시물 목록 조회
    const getUserBookmarksQuery = 'SELECT post_id FROM bookmark WHERE user_nickname = ?';
    db.query(getUserBookmarksQuery, [userNickname], (err, bookmarkResults) => {
      if (err) {
        console.error('북마크 조회 오류:', err);
        res.status(500).send('데이터베이스 오류');
        return;
      }

      const userBookmarks = bookmarkResults.map((bookmark) => bookmark.post_id);

      // 2. 검색 쿼리 작성 및 실행
      const searchQuery = `
        SELECT *
        FROM posts
        WHERE title LIKE ? OR content LIKE ? OR region LIKE ?
      `;

      db.query(searchQuery, [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`], (err, results) => {
        if (err) {
          console.error('검색 쿼리 실행 오류:', err);
          res.status(500).send('데이터베이스 오류');
        } else {
          // 3. 각 검색 결과에 북마크 여부 정보 추가
          const resultsWithBookmarks = results.map((post) => ({
            ...post,
            isBookmarked: userBookmarks.includes(post.id),
          }));

          if (resultsWithBookmarks.length > 0) {
            // 4. 검색 결과를 클라이언트에 전송
            res.status(200).json(resultsWithBookmarks);
          } else {
            res.status(400).send('검색된 결과가 없습니다.');
          }
        }
      });
    });
  });



  // GET /posts/tag/:tag 엔드포인트 (북마크 여부 포함)
  router.get('/tag/:tag', (req, res) => {
    const tag = req.params.tag; // 요청에서 태그 파라미터 추출
    const userNickname = req.query.nickname; // 로그인한 사용자의 닉네임
    console.log(tag, userNickname);


    // 1. 해당 사용자가 북마크한 게시물 목록 조회
    const getUserBookmarksQuery = 'SELECT post_id FROM bookmark WHERE user_nickname = ?';
    db.query(getUserBookmarksQuery, [userNickname], (err, bookmarkResults) => {
      if (err) {
        console.error('북마크 조회 오류:', err);
        res.status(500).send('데이터베이스 오류');
        return;
      }

      const userBookmarks = bookmarkResults.map((bookmark) => bookmark.post_id);

      // 2. 해당 태그를 포함하는 게시물 조회
      const getPostsByTagQuery = `
        SELECT *
        FROM posts
        WHERE tag LIKE ?
      `;

      db.query(getPostsByTagQuery, [`%${tag}%`], (err, postsResults) => {
        if (err) {
          console.error('게시물 조회 오류:', err);
          res.status(500).send('데이터베이스 오류');
          return;
        }

        // 3. 각 게시물에 북마크 정보 추가
        const postsWithBookmarks = postsResults.map((post) => ({
          ...post,
          isBookmarked: userBookmarks.includes(post.id),
        }));

        // 4. 응답으로 게시물과 북마크 정보를 함께 반환
        res.status(200).json(postsWithBookmarks);
      });
    });
  });



  // GET 요청 처리 (모든 게시물 가져오기 및 북마크 정보 포함)
  router.get('/', (req, res) => {
    const userNickname = req.query.nickname; // 로그인한 사용자의 닉네임

    // 1. 해당 사용자가 북마크한 게시물 목록 조회
    const getUserBookmarksQuery = 'SELECT post_id FROM bookmark WHERE user_nickname = ?';
    db.query(getUserBookmarksQuery, [userNickname], (err, bookmarkResults) => {
      if (err) {
        console.error('북마크 조회 오류:', err);
        res.status(500).send('데이터베이스 오류');
        return;
      }

      const userBookmarks = bookmarkResults.map((bookmark) => bookmark.post_id);

      // 2. 모든 게시물 조회 및 북마크 여부 확인
      const getAllPostsQuery = 'SELECT * FROM posts';
      db.query(getAllPostsQuery, (err, postsResults) => {
        if (err) {
          console.error('게시물 조회 오류:', err);
          res.status(500).send('데이터베이스 오류');
          return;
        }

        // 3. 각 게시물에 북마크 정보 추가
        const postsWithBookmarks = postsResults.map((post) => ({
          ...post,
          isBookmarked: userBookmarks.includes(post.id),
        }));

        // 4. 응답으로 모든 게시물과 북마크 정보를 함께 반환
        res.status(200).json(postsWithBookmarks);
      });
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
