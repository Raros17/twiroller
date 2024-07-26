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
    args: ['--no-sandbox', '--disable-setuid-sandbox']
};
export function tweetCrawler(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const browser = yield puppeteer.launch(launchOptions);
            const page = yield browser.newPage();
            yield page.goto(url, {
                waitUntil: 'networkidle2',
            });
            yield page.waitForSelector('div[data-testid="tweetPhoto"] img', { timeout: 60000 });
            const imgSrcs = yield page.evaluate(() => {
                const photoDivs = document.querySelectorAll('div[data-testid="tweetPhoto"]');
                const srcList = [];
                photoDivs.forEach((div) => {
                    const img = div.querySelector('img');
                    if (!img) {
                        return [];
                    }
                    if (img && img.src) {
                        srcList.push(img.src);
                    }
                });
                console.log('Transformed URLs inside evaluate:', srcList);
                return srcList;
            });
            console.log('Transformed Image URLs:', imgSrcs);
            yield page.waitForSelector('div[data-testid="tweetText"]', { timeout: 60000 });
            const spanText = yield page.evaluate(() => {
                const tweetDiv = document.querySelector('div[data-testid="tweetText"]');
                if (!tweetDiv) {
                    return [];
                }
                ;
                const spans = tweetDiv.querySelectorAll('span');
                return Array.from(spans).map((span) => span.textContent).filter((text) => text !== null);
                ;
            });
            yield browser.close();
            console.log('Extracted Text:', spanText, imgSrcs);
            return { text: spanText, images: imgSrcs };
        }
        catch (error) {
            console.error('Error during crawling:', error);
            throw error;
        }
    });
}
