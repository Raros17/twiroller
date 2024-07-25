import puppeteer, { Cookie } from 'puppeteer';

interface LoginResponse {
  success: boolean;
  message?: string;
  cookies?: Cookie[];
}

export async function twitterLogin(username: string, password: string): Promise<LoginResponse> {
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  try {
    await page.goto('https://twitter.com/login', { waitUntil: 'networkidle2' });

    await page.type('input[name="session[username_or_email]"]', username);
    await page.type('input[name="session[password]"]', password);
    await page.click('div[data-testid="LoginForm_Login_Button"]');

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const isLoginSuccess = await page.evaluate(() => {
      return !!document.querySelector('a[data-testid="AppTabBar_Home_Link"]');
    });

    if (isLoginSuccess) {
      const cookies = await page.cookies();
      await browser.close();
      return { success: true, cookies };
    } else {
      await browser.close();
      return { success: false, message: 'Login failed, please check your credentials.' };
    }
  } catch (error) {
    console.error('Error during login:', error);
    await browser.close();
    return { success: false, message: 'An error occurred during login.' };
  }
}
