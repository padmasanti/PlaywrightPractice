import {test, expect} from '@playwright/test';
const logindata = [
{username: 'standard_user', password: 'secret_sauce', expectedresult: 'Success'}, 
{username: 'locked_out_user', password: 'secret_sauce', expectedresult: 'Failure'}, 
{username: 'wrong_user', password: 'wrong_password', expectedresult: 'Failure'} 
]

for (const data of logindata) {
test (`data driven test for login with ${data.username}`, async({page}) => {

    await page.goto ('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);    
    await page.getByRole('button', {name: 'Login'}).click();
    if (data.expectedresult === 'Success') {
        await expect (page).toHaveURL('https://www.saucedemo.com/inventory.html');
        console .log (`Login successful with user: ${data.username}`);
    }
    else {
        const errormessage = page.locator ('div[class="error-message-container error"] h3');
        await expect (errormessage). toBeVisible();
        console .log (`Login unsuccessful with user: ${data.username}`);
        console .log (errormessage.textContent());
    }
})};