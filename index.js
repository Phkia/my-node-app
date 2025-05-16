const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// public 폴더 안의 정적 파일 제공
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});