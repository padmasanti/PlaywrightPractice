import Page from '@playwright/test';
export async function login(page:Page, username: string , password: string){
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#submit');
    await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
}