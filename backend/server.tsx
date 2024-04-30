const express = require('express');

const app = express();
const PORT = 3008;

app.get('/crawl', async (req, res) => {
  res.json({ message: "Endpoint is currently unavailable." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // 서버가 정상적으로 실행되면 이 메시지가 출력됩니다.
});
