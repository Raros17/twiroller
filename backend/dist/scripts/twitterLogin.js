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
export function twitterLogin(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch(launchOptions);
        const page = yield browser.newPage();
        try {
            yield page.goto('https://x.com/i/flow/login', { waitUntil: 'networkidle2' });
            yield page.waitForSelector('input[autocomplete="username"]');
            yield page.type('input[autocomplete="username"]', username);
            yield page.click('span:contains("다음")');
            yield page.waitForSelector('input[autocomplete="current-password"]', { visible: true });
            yield page.type('input[autocomplete="current-password"]', password);
            yield page.click('div[data-testid="LoginForm_Login_Button"]');
            yield page.waitForNavigation({ waitUntil: 'networkidle2' });
            const isLoginSuccess = yield page.evaluate(() => {
                return !!document.querySelector('a[data-testid="LoginForm_Login_Button"]');
            });
            if (isLoginSuccess) {
                const cookies = yield page.cookies();
                yield browser.close();
                return { success: true, cookies };
            }
            else {
                yield browser.close();
                return { success: false, message: 'Login failed, please check your credentials.' };
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            yield browser.close();
            return { success: false, message: 'An error occurred during login.' };
        }
    });
}
