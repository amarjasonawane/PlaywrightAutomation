const { test, expect } =require('@playwright/test');

test('UploadEx', async ({ page }) => {
  /*  await page.goto("http://autopract.com/selenium/upload1/");
  //  await page.locator('//input[@type="file"]').setInputFiles('tests/1.txt','/tests/2.txt');
  await page.setInputFiles("//input[@type='file']",'tests/1.txt');
    await page.locator('//button[@type="submit"]').click();*/

    await page.goto("http://autopract.com/selenium/upload2/"); 
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('//a[@id="pickfiles"]').click()
    ])
 //   await fileChooser.setFiles('tests/1.txt');
    await fileChooser.setFiles({name:'file.txt',mimeType:'text/plain',buffer:Buffer.from('This is a Sample file.')})
    await page.locator('//a[@id="uploadfiles"]').click();

}
);