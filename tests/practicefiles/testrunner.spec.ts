import {test, expect } from '@playwright/test';
test.describe('Login Functionality', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');
    });
    test ('validate login', (async ({ page }) => {

        await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

        await page.getByRole('textbox', { name: 'Username' }).fill('student');
        await page.getByRole('textbox', { name: 'Password' }).fill('Password123');

        await page.getByRole('button', { name: 'Submit' }).click();
    
        await expect (page).toHaveURL ('https://practicetestautomation.com/logged-in-successfully/') 
    }));

    test ('click on English link using text locator', (async ({page}) => {

    await page.goto('https://www.wikipedia.org');
    const englishLink = page.getByRole('link', { name: 'English 7,069,000+ articles' });
    await englishLink.click();
    await expect(page).toHaveURL(/en\.wikipedia\.org/);

    }));

    test ('click search using role', (async({page}) => {
    await page.goto('https://www.wikipedia.org');
    const searchButton = page.getByRole('button', { name: 'Search'});
    await searchButton.click();
    // After clicking search without input, we stay on the same page
    await expect(page).toHaveURL('https://www.wikipedia.org/');

    }));

    test ('enter value using label', (async ({page}) => {
    
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    const username = page.getByLabel('Username');
    await username.fill('Testuser');
    const getUser = await username.inputValue();
    console.log("User name value:", getUser);
    expect(getUser).toBe('Testuser');


    }));

    test ('enter value wth placeholder', (async({page}) => {

        await page.goto ('https://www.saucedemo.com/');
        const username = await page.getByPlaceholder ('Username');
        await username.fill ('standard_user');
        const getusername = await username.inputValue();
        console. log ("entered text:",getusername );
        expect (getusername). toBe ('standard_user');

    }));


});