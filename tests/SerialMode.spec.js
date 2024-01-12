const { test, expect } =require('@playwright/test');

test.describe.configure({mode:'serial'})
let page;
 test.beforeAll('Before All',async({ browser }) =>
{
   page = await browser.newPage();

})
 
test('Runs 1',async() =>
{
    await page.goto("https://www.adactinhotelapp.com");

})

test('Runs 2',async() =>
{
    await page.locator('#username').fill('amarjasonawane');
    await page.pause();
    await page.locator('#password').fill('Amarja@123');
    await page.getByRole('button', { name: 'Login' }).click();
})

test('Runs 3',async() =>
{
    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption({index:1});
    await page.locator('//select[@id="room_type"]').selectOption({label:'Deluxe'});
    await page.locator('//select[@id="room_nos"]').selectOption({index:2});
    await page.locator('//input[@id="Submit"]').click();
})

test.afterAll('After All',async()=>
{
    await page.close();
    
})
