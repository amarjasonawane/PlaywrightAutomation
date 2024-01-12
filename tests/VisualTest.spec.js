const { test, expect,chromium } =require('@playwright/test');

test('Visual Test', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.adactinhotelapp.com");
    await expect (await page.screenshot()).toMatchSnapshot('loginPage.png');
  })