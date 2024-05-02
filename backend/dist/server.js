var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { crawls } from './scripts/crawler.js';
import express from 'express';
const app = express();
const PORT = 8080;
crawls();
app.get('/', (req, res) => {
    res.send('hello!');
});
app.get('/crawl', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //   const data = await crawls(); // Puppeteer로 크롤링한 데이터
    //   res.json({ crawledData: data }); // JSON 형식으로 응답
    // } catch (error) {
    //   console.error('Error during crawling:', error);
    //   res.status(500).json({ error: 'Failed to crawl data' });
    // }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
