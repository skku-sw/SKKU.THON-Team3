const express = require('express');
const router = express.Router();

// /tab1 루트로 요청이 오면 처리할 내용
router.get('/', (req, res) => {
  res.send('adsfasdfasdfadfaf');
});

module.exports = router;