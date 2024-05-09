import puppeteer from 'puppeteer';

const launchOptions = {
  headless: false,  
  args: ['--no-sandbox', '--disable-setuid-sandbox']  // 실행 옵션
};

export async function loginAcceptCrawler() {
  try {
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  const id = "twitter_id"; // Twitter ID
  const password = "twitter_password"; // Twitter 패스워드

   await page.goto('https://twitter.com/i/flow/login',{
    waitUntil: 'networkidle2', 
   });
   await page.waitForSelector('input[name="text"]');
   await page.type('input[name="text"]', id);
   await page.keyboard.press('Enter');


   console.log('입력 및 클릭 완료');
   //await browser.close()
} catch(error){
  console.error('Error during crawling:', error); 
  throw error; 
  }
}
