import { test, expect } from '@playwright/test';
test ('simulate Github user navigation flow', async({ page })=> {

    await page.goto('https://github.com');
    // Click on the visible Sign in link in the header navigation
    await page.click('a[href="/login"]:visible');
    await page.waitForURL('**/login');
    expect(page.url()).toContain('/login');

    await page.goBack();
    await page.waitForURL('https://github.com');

    await page.goForward();
    await page.waitForURL('**/login');

    await page.reload();

    await page.evaluate(() => {
        window.location.href = 'https://github.com/microsoft/playwright';
    });

    });