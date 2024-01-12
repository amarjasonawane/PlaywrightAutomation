const {test, expect} = require('@playwright/test');    //importing @playwright/tests folder
const { timeout } = require('../playwright.config');
const { TIMEOUT } = require('dns');

test('Browser Control',async({page})=>
{
    await page.goto("http://google.com");
    await page.goto("https://adactinhotelapp.com/");
    await page.goBack();
    await expect(page).toHaveTitle("Google");
    await page.goForward();
    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
}
);
        