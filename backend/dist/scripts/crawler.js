var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// crawler.ts
import puppeteer from 'puppeteer';
const launchOptions = {
    //headless: true,  // 브라우저를 숨김 모드로 실행
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // 실행 옵션
};
export function crawls() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const browser = yield puppeteer.launch(launchOptions);
            const page = yield browser.newPage();
            const twitter_id = "트위터 아이디";
            const twitter_pw = "트위터 패스워드";
            yield page.goto('https://twitter.com/?lang=ko/i/flow/login');
            yield page.evaluate((id, pw) => {
                document.querySelector('#id').value = id;
                document.querySelector('#pw').value = pw;
            }, twitter_id, twitter_pw);
            yield page.click('.버튼');
            yield page.waitForNavigation();
            yield page.goto('받아온 주소 여기');
            yield page.evaluate(() => {
                const element = document.querySelector('span');
                return element ? element.textContent : 'Element not found';
            });
            // await page.waitForSelector('a[data-testid="loginButton"]');
            // await page.click('a[data-testid="loginButton"]');
            console.log('제대로 접근했습니다.');
            // 원하는 데이터를 추출
            // const data = await page.evaluate(() => {
            //   const element = document.querySelector('span');
            //   return element ? element.textContent : 'Element not found'; // 요소의 텍스트 반환
            // });
            yield browser.close(); // 브라우저 종료
            //console.log('Crawled data:', data); // 크롤링된 데이터 콘솔 출력
            //return data; // 추출한 데이터를 반환
        }
        catch (error) {
            console.error('Error during crawling:', error); // 크롤링 중 에러 처리
            throw error; // 에러 발생 시 예외 발생
        }
    });
}
