var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
const app = express();
const PORT = 8080;
app.get('/crawl', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('냐앙');
    // try {
    //     const data = await crawls(); // 크롤링 실행
    //     res.json({ data }); // JSON 형식으로 응답
    //   } catch (err) {
    //     console.error("Error during crawling:", err); // 오류 로깅
    //     res.status(500).json({ error: err.message }); // 오류 응답
    //   }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    // 서버가 정상적으로 실행되면 이 메시지가 출력됩니다.
});
