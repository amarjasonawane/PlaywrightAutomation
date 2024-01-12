const { test, expect } =require('@playwright/test');

test('NestedFrameEx', async ({ page }) => {
    await page.goto("https://www.amazon.com");
    //implicit Role
   await page.getByRole("link",{name:"Hello, sign in Account & Lists"}).click();
 /*   await page.getByRole("textbox",{name:"Email or mobile phone number"}).fill("abc@gmail.com");
    await page.getByRole("button",{name:"Continue"}).click();*/

    //Explicit Role
 //   await page.getByRole("button",{name:"Open Menu"}).click();

  //  await page.getByPlaceholder("Search Amazon.in").fill("laptop");
   // await expect(page.locator('//label[@class="a-form-label"]')).toHaveText('Email or mobile phone number');
    //await expect(page.locator('//label[@class="a-form-label"]')).toContainText('phone');
    await expect(page.locator('//label[@class="a-form-label"]')).not.toContainText('laptop');

   // await page.locator('//input[@type="submit"]').click();


 
}
);