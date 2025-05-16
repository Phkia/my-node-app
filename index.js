const express = require('express');
const app = express();
const port = 3000;

// public 폴더를 정적(static) 파일 폴더로 지정
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});
