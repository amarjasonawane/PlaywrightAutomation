const {test, expect} = require('@playwright/test'); 

test('Browse in Incognito',async({browser})=>
{
    const context = await browser.newContext();  //opens browser in incognito mode
    const page = await context.newPage();       //opens new page
    await page.goto("http://google.com");
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle("Google");
    await context.close();
}

);