import puppeteer from 'puppeteer';

const launchOptions = {
  headless: false,  
  args: ['--no-sandbox', '--disable-setuid-sandbox']  
};

export async function tweetCrawler(url:string) {
  try {
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

   await page.goto(url,{
    waitUntil: 'networkidle2', 
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
      if (img && img.src) {
        srcList.push(img.src);
      }
    });
    console.log('Transformed URLs inside evaluate:', srcList);
    return srcList;
  });
  console.log('Transformed Image URLs:', imgSrcs);

   await page.waitForSelector('div[data-testid="tweetText"]', { timeout: 60000 });
   const spanText = await page.evaluate(()=>{
    const tweetDiv = document.querySelector('div[data-testid="tweetText"]');
    if(!tweetDiv){
      return [];
    };
    const spans = tweetDiv.querySelectorAll('span');
    return Array.from(spans).map((span) => span.textContent).filter((text): text is string => text !== null); ;
   })     

   await browser.close();
   console.log('Extracted Text:', spanText, imgSrcs);
   return { text: spanText, images: imgSrcs }; 
} catch(error){
  console.error('Error during crawling:', error); 
  throw error; 
  }
}
