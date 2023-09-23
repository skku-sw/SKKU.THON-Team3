const express = require('express');
const router = express.Router();
module.exports = (db) => {  

  router.get('/', (req, res) => {
    // 특정 nickname을 가진 사용자가 지원한 수를 조회
    db.query('SELECT COUNT(*) AS apply_count FROM apply WHERE user_nickname = ?', [req.query.nickname], (err, results) => {
      if(err){
        console.error('쿼리 실행 오류:', err);
        res.status(500).send('지원 현황 조회 실패');
      }
      else{
        res.json(results);
      }
    });

  });
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
            res.status(500).send('최근 지원한 공고 조회 실패');
        } else {
          if (results.length === 0) {
            res.status(404).send('최근 지원한 공고 조회 실패')
        } else {
            res.json(results);
        }
        }
        });
    });
    
    //북마크 조회
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
              if(results.length === 0){
                res.status(404).send('북마크 조회 실패')
              } else {
                res.json(results);
              }
            }
        });
    });
    
    //북마크 취소
    router.post('/bookmark/delete', (req, res) => {
        const requestData = req.body;
        db.query(`DELETE FROM bookmark WHERE user_nickname = ? AND post_id = ?`, [requestData.nickname, requestData.post_id], (err, results) => {
            if(err){
                console.error('쿼리 실행 오류:', err);
                res.status(500).send('북마크 삭제 실패');
            }
            else{
                if(results.affectedRows === 0){
                    res.status(404).send('북마크 삭제 실패')
                }
                else{
                    res.status(200).send('북마크 삭제 성공');
                }
            }
        });
    }
    );

    //북마크 추가
    router.post('/bookmark/add', (req, res) => {
      const requestData = req.body;
      
      // 이미 북마크가 되어 있는지 확인
      db.query('SELECT * FROM bookmark WHERE user_nickname = ? AND post_id = ?', [requestData.nickname, requestData.post_id], (err, results) => {
          if (err) {
              console.error('쿼리 실행 오류:', err);
              res.status(500).send('데이터베이스 오류');
          } else {
              // 이미 북마크가 되어 있다면 실패 응답을 보냄
              if (results.length > 0) {
                  res.status(400).send('이미 북마크된 게시글입니다.');
              } else {
                  // 북마크 추가
                  db.query('INSERT INTO bookmark (user_nickname, post_id) VALUES (?, ?)', [requestData.nickname, requestData.post_id], (err, insertResults) => {
                      if (err) {
                          console.error('쿼리 실행 오류:', err);
                          res.status(500).send('북마크 추가 실패');
                      } else {
                          res.status(200).send('북마크 추가 성공');
                      }
                  });
              }
          }
      });
  });
  
  return router; // 이 부분이 함수 밖으로 나와야 합니다.
};
