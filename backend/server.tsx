const express = require('express');
//const { crawls } = require('./scripts/crawler');

const app = express();
const PORT = 8080;



app.get('/crawl', async (req, res) => {
    res.send('냐앙')
    // try {
    //     const data = await crawls(); // 크롤링 실행
    //     res.json({ data }); // JSON 형식으로 응답
    //   } catch (err) {
    //     console.error("Error during crawling:", err); // 오류 로깅
    //     res.status(500).json({ error: err.message }); // 오류 응답
    //   }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // 서버가 정상적으로 실행되면 이 메시지가 출력됩니다.
});
