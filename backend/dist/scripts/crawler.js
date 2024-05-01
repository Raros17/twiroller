var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const puppeteer = require('puppeteer');
export function crawls() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch();
        const page = yield browser.newPage();
        yield page.goto('https://www.naver.com/'); // 크롤링할 사이트
        const data = yield page.evaluate(() => {
            const element = document.querySelector('.MediaContentsView-module__info_title___vdgEM');
            return element ? element.textContent : 'Element not found'; // 요소가 있으면 텍스트 반환, 없으면 메시지 반환
        });
        yield browser.close();
        console.log("Crawled data:", data);
        return data;
    });
}
