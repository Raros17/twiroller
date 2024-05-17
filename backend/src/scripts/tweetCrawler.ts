import puppeteer from 'puppeteer';

const launchOptions = {
  headless: false,  
  args: ['--no-sandbox', '--disable-setuid-sandbox']  // 실행 옵션
};

export async function tweetCrawler(url:string) {
  try {
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

   await page.goto(url,{
    waitUntil: 'networkidle2', //해당 항목 추가하여 페이지 로딩이 완료될 때까지 기다린다.
    //networkidle2는 모든 네트워크 요청이 완료되기까지 대기하는 옵션.
   });

   await page.waitForSelector('div[data-testid="tweetPhoto"] img', { timeout: 60000 });


   const imgSrcs = await page.evaluate(()=>{
    const photoDivs = document.querySelectorAll('div[data-testid="tweetPhoto"]');
    const srcList:string[] = [];
    photoDivs.forEach((div)=>{
      const img = div.querySelector('img');
      if(!img){
        return [];
      }
      if (img&&img.src){
        srcList.push(img.src);
      } 
    })
    return srcList; 
   })

   await page.waitForSelector('div[data-testid="tweetText"]', { timeout: 60000 });
   const spanText = await page.evaluate(()=>{
    const tweetDiv = document.querySelector('div[data-testid="tweetText"]');

    if(!tweetDiv){
      return [];
    };
    const spans = tweetDiv.querySelectorAll('span');
    return Array.from(spans).map((span) => span.textContent);
   })     
   await browser.close();
   console.log('Extracted Text:', spanText, imgSrcs);
   return { text: spanText, images: imgSrcs }; 
} catch(error){
  console.error('Error during crawling:', error); 
  throw error; 
  }
}
