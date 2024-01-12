import { test, expect } from '@playwright/test';

test('PopUp', async ({ page }) => {
    await page.goto("http://autopract.com/selenium/popup/");
    const [newPopUp] = await Promise.all([
        page.waitForEvent('popup'),
        await page.locator('//a[@target="popup"]').click()])

        await newPopUp.waitForLoadState();
        console.log(await newPopUp.title());

        await newPopUp.locator('//a[text()="About Us"]').click();
        await expect(newPopUp).toHaveTitle('About Us');
}
);
