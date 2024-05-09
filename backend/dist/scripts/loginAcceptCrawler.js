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
export function loginAcceptCrawler() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const browser = yield puppeteer.launch(launchOptions);
            const page = yield browser.newPage();
            const id = "twitter_id"; // Twitter ID
            const password = "twitter_password"; // Twitter 패스워드
            yield page.goto('https://twitter.com/i/flow/login', {
                waitUntil: 'networkidle2',
            });
            yield page.waitForSelector('input[name="text"]');
            yield page.type('input[name="text"]', id);
            yield page.keyboard.press('Enter');
            console.log('입력 및 클릭 완료');
            //await browser.close()
        }
        catch (error) {
            console.error('Error during crawling:', error);
            throw error;
        }
    });
}
