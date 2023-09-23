const express = require('express')
const app = express()
const mysql = require('mysql');
require('dotenv').config();
const bodyParser = require('body-parser');
const port = 3000
app.use(express.json());

// 환경 변수 사용 예제
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;

// MySQL 연결 설정
const db = mysql.createConnection({
  host     : dbHost,
  user     : dbUser,
  password : dbPassword,
  database : dbDatabase
});

console.log(dbHost, dbUser, dbPassword, dbDatabase)

// MySQL 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL 데이터베이스에 연결되었습니다.');
  }
});

// body-parser 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: true }));

// 라우팅 및 미들웨어 설정
app.get('/', (req, res) => {
  // 여기에서 데이터베이스 쿼리 실행 등을 처리
  res.send('Express.js와 MySQL 연동 예제');
});

// app.use('/', require('./routes/login'));
app.use('/login', require('./routes/login')(db));
console.log("app.js")
app.use('/board', require('./routes/board')(db));
// app.use('/map', require('./routes/map'));
// app.use('/chat', require('./routes/chat'));
app.use('/mypage', require('./routes/mypage')(db));

// 사용자 정보 가져오기
app.get('/users', (req, res) => {
  // MySQL 쿼리 실행 예제
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      res.status(500).send('데이터베이스 오류');
    } else {
      // 결과 처리
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})