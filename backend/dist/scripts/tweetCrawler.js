var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from 'puppeteer';
const launchOptions = {
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // 실행 옵션
};
export function tweetCrawler() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const browser = yield puppeteer.launch(launchOptions);
            const page = yield browser.newPage();
            yield page.goto('https://x.com/catshouldnt/status/1791135930168070544', {
                waitUntil: 'networkidle2', //해당 항목 추가하여 페이지 로딩이 완료될 때까지 기다린다.
                //networkidle2는 모든 네트워크 요청이 완료되기까지 대기하는 옵션.
            });
            yield page.waitForSelector('div[data-testid="tweetPhoto"] img');
            const imgSrcs = yield page.evaluate(() => {
                const photoDivs = document.querySelectorAll('div[data-testid="tweetPhoto"]');
                const srcList = [];
                photoDivs.forEach((div) => {
                    const img = div.querySelector('img');
                    if (img && img.src) {
                        srcList.push(img.src);
                    }
                });
                return srcList;
            });
            yield page.waitForSelector('div[data-testid="tweetText"]');
            const spanText = yield page.evaluate(() => {
                const tweetDiv = document.querySelector('div[data-testid="tweetText"]');
                if (!tweetDiv) {
                    return [];
                }
                ;
                const spans = tweetDiv.querySelectorAll('span');
                return Array.from(spans).map((span) => span.textContent);
            });
            yield browser.close();
            return { text: spanText, images: imgSrcs };
            //console.log('Extracted Text:', spanText, imgSrcs);
        }
        catch (error) {
            console.error('Error during crawling:', error);
            throw error;
        }
    });
}
