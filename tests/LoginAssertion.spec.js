import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#username')).toBeEmpty();
  await page.locator('#username').click();
  await page.locator('#username').fill('amarjasonawane');
  await page.locator('#password').fill('Amarja@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#username_show')).toBeVisible();
  await expect(page.locator('body')).toContainText('Search Hotel');
  await expect(page.locator('#username_show')).toHaveValue('Hello amarjasonawane!');
});