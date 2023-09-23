const express = require('express')
const app = express()
const cors = require('cors'); // cors 미들웨어 추가
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

// console.log(dbHost, dbUser, dbPassword, dbDatabase)

// MySQL 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
  } else {
    console.log('MySQL 데이터베이스에 연결되었습니다.');
  }
});
// CORS 설정
app.use(cors());
// body-parser 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: true }));

console.log("app.js")
app.use('/login', require('./routes/login')(db));
app.use('/board', require('./routes/board')(db));
app.use('/posts', require('./routes/posts')(db));
app.use('/map', require('./routes/map')(db));
// app.use('/chat', require('./routes/chat'));
app.use('/myPage', require('./routes/myPage')(db));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})