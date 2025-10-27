import playwrightTest from '@playwright/test';
const { test, expect } = playwrightTest;
import { readXLSX } from '../utils/dataloader_xlsx.js';

const logindata = readXLSX('tests/data/loginData.xlsx', 'Sheet1') ;

test.describe('Excel Driven Login Tests', () => {
    logindata.forEach((data: any) => {
        test(`Login test for ${data.username}`, async ({ page }: { page: any }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByPlaceholder('Username').fill(data.username as string);
        await page.getByPlaceholder('Password').fill(data.password as string);
        await page.getByRole('button', { name: 'Login' }).click();
    
        if (data.username === 'standard_user') {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            console.log(`Login successful with user: ${data.username}`);
        } else {
            const errormessage = page.locator('div[class="error-message-container error"] h3');
            await expect(errormessage).toBeVisible();
            const errorText = await errormessage.textContent();
            console.log(`Login unsuccessful with user: ${data.username}`);
            console.log(`Error message: ${errorText}`);
        }
        });
    })});

