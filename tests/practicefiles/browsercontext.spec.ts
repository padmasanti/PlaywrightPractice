import { test, expect } from '@playwright/test';

test('browser context', async ({browser})=> {

    const browsercontext1 = await browser.newContext();
    const browsercontext2 = await browser.newContext();
    const browsercontext3 = await browser.newContext();

    const page1 = await browsercontext1.newPage();
    const page2 = await browsercontext2.newPage();
    const page3 = await browsercontext3.newPage();

    await page1.goto('https://parabank.parasoft.com/parabank/register.htm');
    await page1.locator("//input[@name='customer.firstName']").fill('abc1');
    await page1.locator("//input[@name='customer.lastName']").fill('abc2');

    await page2.goto('https://parabank.parasoft.com/parabank/register.htm');
    await page2.locator("//input[@name='customer.firstName']").fill('xyz1');
    await page2.locator("//input[@name='customer.lastName']").fill('xyz2');
    await page2.locator("//input[@name='customer.address.street']").fill('xyz street');
    await page2.locator("//input[@name='customer.address.city']").fill('City123');
    await page2.locator("//input[@name='customer.address.state']").fill('State123');
    await page2.locator("//input[@name='customer.address.zipCode']").fill('123456');
    await page2.locator("//input[@name='customer.phoneNumber']").fill('123456789');
    await page2.locator("//input[@name='customer.ssn']").fill('123-45-6789');

    await page3.goto('https://google.com');
   
    
    await browsercontext1.close();
    await browsercontext2.close();
    await browsercontext3.close();

    // Note: No need to close
    //  browser when using Playwright's browser fixture

});