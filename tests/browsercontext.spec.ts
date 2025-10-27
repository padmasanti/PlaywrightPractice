import{test, expect} from '@playwright/test';
import{firefox, chromium, webkit} from '@playwright/test';
import{Page, Browsercontext} from '@playwright/test';

test('browser context', async ({})=> {

    const browser = await chromium.launch({ headless: false });

    const browsercontext1 = await browser.newContext();
    const browsercontext2 = await browser.newContext();
    const browsercontext3 = await browser.newContext();

    const page1 = await browsercontext1.newPage();
    const page2 = await browsercontext2.newPage();
    const page3 = await browsercontext3.newPage();

    page1.goto('https://parabank.parasoft.com/parabank/register.htm');
    page1.locator("//input[@name='customer.firstName']").fill('abc1');
    page1.locator("//input[@name='customer.lastName']").fill('abc2');

    page2.goto('https://parabank.parasoft.com/parabank/register.htm');
    page2.locator("//input[@name='customer.firstName']").fill('xyz1');
    page2.locator("//input[@name='customer.lastName']").fill('xyz2');
    page2.locator("//input[@name='customer.address.street']").fill('xyz street');
    page2.locator("//input[@name='customer.address.city']").fill('City123');
    page2.locator("//input[@name='customer.address.state']").fill('State123');
    page2.locator("//input[@name='customer.address.zipCode']").fill('123456');
    page2.locator("//input[@name='customer.phoneNumber']").fill('123456789');
    page2.locator("//input[@name='customer.ssn']").fill('123-45-6789');


    page3.goto('https://google.com');
   
    
    browsercontext1.close();
    browsercontext2.close();
    browsercontext3.close();

    browser.close();


});