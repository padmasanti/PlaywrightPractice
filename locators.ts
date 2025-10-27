import { chromium, Browser, Page } from 'playwright';

async function main() {
    // Launch the Chrome browser using Playwright
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const page: Page = await browser.newPage();

    // Navigate to Google
    await page.goto('https://www.google.com');

    // Locators for Google elements

    // 1. Google Logo - unique property: alt attribute
    const googleLogo = page.locator('img[alt="Google"]');

    // 2. Google Search edit box - unique property: name="q"
    const searchBox = page.locator('input[name="q"]');

    // 3. "Google Search" button - unique property: name="btnK"
    const searchButton = page.locator('input[name="btnK"]');

    // Example: Highlight elements (optional)
    await googleLogo.evaluate((el) => el.style.border = '2px solid red');
    await searchBox.evaluate((el) => el.style.border = '2px solid blue');
    await searchButton.evaluate((el) => el.style.border = '2px solid green');

    // Wait for observation
    await page.waitForTimeout(5000);

    await browser.close();
}

main();