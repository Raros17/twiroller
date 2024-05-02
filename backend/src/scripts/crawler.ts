// crawler.ts
import puppeteer from 'puppeteer';

const launchOptions = {
  headless: true,  // 브라우저를 숨김 모드로 실행
  args: ['--no-sandbox', '--disable-setuid-sandbox']  // 실행 옵션
};

export async function crawls() {
  try {
    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    await page.goto('https://www.naver.com/'); 
    
    // 원하는 데이터를 추출
    const data = await page.evaluate(() => {
      const element = document.querySelector('div');
      return element ? element.textContent : 'Element not found'; // 요소의 텍스트 반환
    });

    await browser.close(); // 브라우저 종료

    console.log('Crawled data:', data); // 크롤링된 데이터 콘솔 출력

    return data; // 추출한 데이터를 반환
  } catch (error) {
    console.error('Error during crawling:', error); // 크롤링 중 에러 처리
    throw error; // 에러 발생 시 예외 발생
  }
}
