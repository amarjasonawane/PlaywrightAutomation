import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await page.locator('#username').click();
  await page.locator('#username').fill('amarjasonawane');
  await page.locator('#username').press('Tab');
  await page.locator('#password').fill('Amarja@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#username_show')).toBeVisible();
});