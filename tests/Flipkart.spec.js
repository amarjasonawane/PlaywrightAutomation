import { test, expect } from '@playwright/test';


test.only('Flipkart multiple page', async ({ context }) => {
    const page = await context.newPage();  
    await page.goto('https://www.flipkart.com/');
    await page.getByPlaceholder('Search for Products, Brands').click();
    await page.getByPlaceholder('Search for Products, Brands').fill('mobiles');
    await page.getByRole('link', { name: 'mobiles 5g in Mobiles' }).click();
    await expect(page.getByText('mobiles 5g')).toBeVisible();
    await expect(page.locator('#container')).toContainText('APPLE iPhone 15 (Black, 128 GB)');
 
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'APPLE iPhone 15 (Black, 128' }).click()])
 
    const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'APPLE iPhone 15 (Green, 128' }).click()])
 
    await newPage.waitForLoadState();
    await newPage.getByRole('button', { name: 'Add to cart' }).click({force: true});
    await newPage.getByText('Remove').click();
    await newPage.getByText('Remove').nth(2).click();
    await expect(newPage.locator('#container')).toContainText('Login to see the items you added previously');
 
    await newPage1.waitForLoadState();
    await newPage1.getByRole('button', { name: 'Add to cart' }).click({force: true});
    await newPage1.getByText('Remove').click();
    await newPage1.getByText('Remove').nth(2).click();
    await expect(newPage.locator('//div[@class="_1LCJ1U"]')).toContainText('Missing Cart items?');
 
    await page.getByPlaceholder('Search for Products, Brands').click();
    await page.getByPlaceholder('Search for Products, Brands').fill('shoes');
    await page.getByRole('link', { name: 'shoes for mens' }).click();
    await expect(page.getByText('shoes for mens')).toBeVisible();
    });