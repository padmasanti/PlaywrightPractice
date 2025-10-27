import {test, expect} from '@playwright/test';
import {chromium, firefox, webkit} from '@playwright/test';
import {Browser, Page} from '@playwright/test';


test('Browser Instance Test', async () => {
    // Launch the Chrome browser using Playwright
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext ();
    const page = await context.newPage ();

    await page.goto ('https://google.com');
    await page.screenshot ({path: 'browser-test.png'});
    await page.close();
    await browser.close();

});