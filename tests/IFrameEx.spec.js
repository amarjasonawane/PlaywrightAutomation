const { test, expect,chromium } =require('@playwright/test');

test('IFrameEx', async ({ }) => {
  // await page.slow(30);
  const browser = await chromium.launch({ });
  const context = await browser.newContext({
   recordVideo: {
      dir:'videos/',
   }
  })
  const page = await context.newPage();
    await page.goto("http://autopract.com/selenium/iframe1/");

    //await page.screenshot({path:'screenshots/screenshot.png'}); // half page
    await page.screenshot({path:'screenshots/screenshot1_'+Date.now()+'.png'});
 //  const myFrame = page.frame("testframe");
    const myFrame = page.frame({name:"testframe"});
   // const myFrame = page.frame({url:"http://autopract.com/selenium/form1/"});
 //   const myFrame = page.frame({url:/form1/});
    await myFrame.fill("(//input[@class ='form-control'])[1]","Amarja");
    await myFrame.locator("(//input[@class ='form-control'])[1]","Amarja").screenshot({path:'screenshots/screenshot2.png'});
    await myFrame.locator('(//input[@class ="form-control"])').nth(1).type("abc@gmail.com");
}
);