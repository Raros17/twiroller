// crawler.ts
import puppeteer from 'puppeteer';

export async function crawls() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // 크롤링할 웹사이트로 이동
    await page.goto('https://www.naver.com/'); 
    
    // 원하는 데이터를 추출
    const data = await page.evaluate(() => {
      const element = document.querySelector('.MediaContentsView-module__info_title___vdgEM');
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
