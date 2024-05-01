import puppeteer from 'puppeteer';

export async function crawls() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.naver.com/'); // 크롤링할 사이트
  const data = await page.evaluate(() => {
    const element = document.querySelector('.MediaContentsView-module__info_title___vdgEM');
    return element ? element.textContent : 'Element not found'; // 요소가 있으면 텍스트 반환, 없으면 메시지 반환
  });
  await browser.close();
  console.log("Crawled data:", data); 
  return data;
}
