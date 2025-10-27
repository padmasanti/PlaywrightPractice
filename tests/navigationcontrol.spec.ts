import{test, expect, chromium} from '@playwright/test';
test ('simulate Github user navigation flow', async({ page })=> {

    await page.goto('https://github.com');
    await page.click ('//anyxpath');
    await page.waitForURL ('https://github.com/login');
    expect(page.url()).toBe('https://github.com/login');

    await page.goBack();
    await page.waitForURL('https://github.com');

    await page.goForward();
    await page.waitForURL ('https://github.com/login');
    
    await page.reload();

    await page.evaluate (()=> {
     window. location.href = 'https://github.com/microsift/playwright';
    });

    });