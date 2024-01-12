const { test, expect } = require('@playwright/test');

test('Shadow Element Demo',async({page})=>           //page fixture
    {
        await page.goto("http://autopract.com/selenium/shadowdom1/");
       // console.log(await page.locator('//div[@class="target1 button"]').textContent()) //xpath gives only 1 ele
     //  console.log(await page.locator('div.target1').textContent());    //css selector gives error
     console.log(await page.locator('div.target2').textContent());
     console.log(await page.locator('div.target3').textContent());
     console.log(await page.locator('div.target1').first().textContent());//nth(0)
     console.log(await page.locator('div.target1').nth(1).textContent());
     console.log(await page.locator('div.target1').last().textContent()); //nth(2)
     console.log(await page.locator('div.target1').count());  //counts all elements

     console.log(await page.locator(':light(div.target1)').textContent()); //Light Element is printed
    })