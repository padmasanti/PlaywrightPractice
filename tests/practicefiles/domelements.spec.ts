import{test, expect} from '@playwright/test';

test.describe('dom and shadow Tests', () => {

test('dom elements locators', async({page}) => {
    await page.goto ('https://www.saucedemo.com/');
    const loginbtn= page.locator('#login-button');
    await expect(loginbtn).toBeVisible();

    const username = page .locator('input[data-test="username"]');
    await username.fill('kanna');
    const getusername = await username.inputValue();
    console.log ("the input text is:", getusername);
    console.log ("testcase passed status:",getusername === 'kanna');

    await page.locator('input[data-test="login-button"]').click();
    console.log ("current page urlis:", page.url());
    await expect (page).toHaveURL(/saucedemo/)
    console.log ("testcase passed status:" );

});

test ('shadow don elements', async({page}) => {

await page.goto('https://books-pwakit.appspot.com/');
const shadowHost = page.locator('book-app');
const searchBox = shadowHost.locator('input#input');
await searchBox.fill('Playwright testing');
await expect(searchBox).toHaveValue('Playwright testing');
});

test ('getbyetext locators', async({page})=> {

    await page.goto ('https://wikipedia.org');
    const searchlocator= page.getByText('Search', {exact: true});
    await searchlocator.click(); 

});

test ('getbyrole', async({page})=> {

    await page.goto ('https://wikipedia.org');
    const searchlocator= page.getByRole('button',{name: 'Search'});
    await searchlocator.click(); 

});

test('getbylabel locator', async({page}) => {
 await page.goto ('https://practicetestautomation.com/practice-test-login/');
 const username = page.getByLabel ('Username');
 await username.fill('testuser');
 const getuser = await username.inputValue();
 console.log ("entered text is:", getuser);
})

test ('getbyolaceholder', async({page}) => {
    await page.goto ('https://www.saucedemo.com/');
    const username =  page.getByPlaceholder ('Username');
    await page.pause();
    await username.fill ('standard_user');
    const getusername = await username.inputValue();    
    console. log ("entered text:",getusername );
})

});

