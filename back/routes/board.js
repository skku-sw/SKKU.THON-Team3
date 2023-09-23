const express = require('express');
const router = express.Router();
module.exports = (db) => {  
  // /tab1 루트로 요청이 오면 처리할 내용

  //게시글 목록
    router.get('/', (req, res) => {
    db.query('SELECT * FROM board', (err, results) => {
        if(err){
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
        }
        else{
            res.json(results);
        }
    });
    });

    //게시글 상세보기
    router.get('/:id', (req, res) => {  
        db.query('SELECT * FROM board WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
        } else {    
            db.query(`SELECT comment.nickname AS comment_nickname, comment.id, comment.content, comment.created_at
            FROM board
            LEFT JOIN comment ON board.id = comment.board_id
            WHERE board.id = ?`, [req.params.id], (err, results2) => {
                if (err) {
                    console.error('쿼리 실행 오류:', err);
                    res.status(500).send('데이터베이스 오류');
                } else {    
                    // 결과 처리
                    res.json({board: results, comment: results2});
                }
            });
        }
        });
    });
    
    //게시글 검색
    router.post('/search', (req, res) => {
        const requestData = req.body.key;
        console.log(requestData);
        db.query('SELECT * FROM board WHERE title LIKE ?', ['%' + requestData + '%'], (err, results) => {
            if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
            } else {    
            // 결과 처리
            res.json(results);
            }
        });
    });

    //게시글 작성
    router.post('/write', (req, res) => {
        const requestData = req.body;
        console.log(requestData);
        db.query('INSERT INTO board (title, content, nickname, created_at, like_count) VALUES (?, ?, ?, now(), 0)', [requestData.title, requestData.content, requestData.nickname], (err, results) => {
            if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
            } else {    
            // 결과 처리
            res.json(results);
            }
        });
    });

    //댓글 작성
    router.post('/comment', (req, res) => {
        const requestData = req.body;
        console.log(requestData);
        db.query('INSERT INTO comment (board_id, content, nickname, created_at) VALUES (?, ?, ?, now())', [requestData.board_id, requestData.content, requestData.nickname], (err, results) => {
            if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
            } else {    
            // 결과 처리
            res.json(results);
            }
        });
    });

    //좋아요
    router.get('/like/:id', (req, res) => {
        db.query('UPDATE board SET like_count = like_count + 1 WHERE id = ?', [req.params.id], (err, results) => {
            if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
            } else {    
            // 결과 처리
            res.json(results);
            }
        });
    });

    //게시글 삭제
    router.get('/delete/:id', (req, res) => {
        db.query('DELETE FROM board WHERE id = ?', [req.params.id], (err, results) => {
            if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).send('데이터베이스 오류');
            } else {    
            // 결과 처리
            res.json(results);
            }
        });
    });


  return router; // 이 부분이 함수 밖으로 나와야 합니다.
};
