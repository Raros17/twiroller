import puppeteer, { Cookie } from 'puppeteer';

interface LoginResponse {
  success: boolean;
  message?: string;
  cookies?: Cookie[];
}

const launchOptions = {
    headless: false,  
    args: ['--no-sandbox', '--disable-setuid-sandbox']  
  };

export async function twitterLogin(username: string, password: string): Promise<LoginResponse> {
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  try {
    await page.goto('https://x.com/i/flow/login', { waitUntil: 'networkidle2' });

    await page.waitForSelector('input[autocomplete="username"]');
    await page.type('input[autocomplete="username"]', username);

    const buttonXPath = "//div[contains(text(), '다음')]/ancestor::button";
    await (page as any).waitForXPath(buttonXPath, { visible: true });
    const [button] = await (page as any).$x(buttonXPath);
    if (button) {
        await button.click();
      } else {
        throw new Error('다음 버튼을 찾을 수 없습니다.');
      }

    await page.waitForSelector('input[autocomplete="current-password"]', { visible: true });
    await page.type('input[autocomplete="current-password"]', password);
    
    await page.click('div[data-testid="LoginForm_Login_Button"]');

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const isLoginSuccess = await page.evaluate(() => {
      return !!document.querySelector('a[data-testid="LoginForm_Login_Button"]');
    });

    if (isLoginSuccess) {
      const cookies = await page.cookies();
      await browser.close();
      return { success: true, cookies };
    } else {
      //await browser.close();
      return { success: false, message: 'Login failed, please check your credentials.' };
    }
  } catch (error) {
    console.error('Error during login:', error);
    //await browser.close();
    return { success: false, message: 'An error occurred during login.' };
  }
}
