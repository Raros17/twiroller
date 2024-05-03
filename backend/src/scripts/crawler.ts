// crawler.ts
import puppeteer from 'puppeteer';

const launchOptions = {
  //headless: true,  // 브라우저를 숨김 모드로 실행
  args: ['--no-sandbox', '--disable-setuid-sandbox']  // 실행 옵션
};

export async function crawls() {
  try {
    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    const twitter_id = "트위터 아이디";
    const twitter_pw = "트위터 패스워드";
    await page.goto('https://twitter.com/?lang=ko/i/flow/login'); 
    await page.evaluate((id, pw)=>{
      document.querySelector('#id').value= id;
      document.querySelector('#pw').value = pw;
    }, twitter_id, twitter_pw);
    await page.click('.버튼');
    await page.waitForNavigation();
    await page.goto('받아온 주소 여기');
    await page.evaluate(()=>{
      const element = document.querySelector('span');
      return element ? element.textContent : 'Element not found';
    })
    
    // await page.waitForSelector('a[data-testid="loginButton"]');
    // await page.click('a[data-testid="loginButton"]');
    console.log('제대로 접근했습니다.')
    // 원하는 데이터를 추출
    // const data = await page.evaluate(() => {
    //   const element = document.querySelector('span');
    //   return element ? element.textContent : 'Element not found'; // 요소의 텍스트 반환
    // });

    await browser.close(); // 브라우저 종료

    //console.log('Crawled data:', data); // 크롤링된 데이터 콘솔 출력

    //return data; // 추출한 데이터를 반환
  } catch (error) {
    console.error('Error during crawling:', error); // 크롤링 중 에러 처리
    throw error; // 에러 발생 시 예외 발생
  }
}
