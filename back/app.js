const express = require('express')
const app = express()
const port = 3000

// app.use('/', require('./routes/login'));
app.use('/', require('./routes/posts'));
// app.use('/board', require('./routes/board'));
// app.use('/map', require('./routes/map'));
// app.use('/chat', require('./routes/chat'));
// app.use('/myPage', require('./routes/myPage'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})