import {test, expect} from '@playwright/test';
let page: any;

test.beforeEach (async({browser}) => {
page = await browser.newPage();
await page. goto ('https://demoblaze.com/');
page.locator ('#login2').click();
await page.locator ('#loginusername'). fill ('test');
await page.locator ('#loginpassword'). fill ('test');
await page.locator ('button:has-text("Log in")'). click ();
await page.waitForTimeout (3000);
})
test.afterEach (async() => {
    
    await page.locator ('#logout2'). click ();
    await page.waitForTimeout (3000);
    await page.close();
});

test ('validate user login', async() => {
    const username = await page.locator ('#nameofuser'). textContent();
    console.log (username);
    expect (username).toBe ('Welcome test');
});

test ('add to cart functionality', async() => {
    await page.locator ('a:has-text("Laptops")'). click ();
    await page.waitForTimeout (2000);
    await page.locator ('a:has-text("Sony vaio i5")'). click ();
    await page.waitForTimeout (2000);
    await page.locator ('text=Add to cart'). click ();
    page.on('dialog', async dialog => {
        console.log (dialog.message());
        await dialog.accept();
    });
    await page.waitForTimeout (3000);
    await page.locator ('#cartur'). click ();
    await page.waitForTimeout (2000);
    const cartitem = await page.locator ('tbody tr'). count();
    console.log ('Number of items in the cart:', cartitem);
    expect (cartitem). toBe (1);
});