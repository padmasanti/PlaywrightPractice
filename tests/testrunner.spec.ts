import {test, expect } from '@playwright/test';
test.describe('Login Functionality', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');
    });
    test ('validate login', (async ({ page }) => {

        await page.locator('//input[@id=username]').fill('student');
        await page.locator('//input[@id=password]').fill('Password123');

        await page.locator('//button[@id =submit]').click();
    
        await expect (page).toHaveURL ('https://practicetestautomation.com/logged-in-successfully/') 
    }));

});