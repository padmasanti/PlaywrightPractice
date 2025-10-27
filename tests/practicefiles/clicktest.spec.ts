import {test, expect} from '@playwright/test';

/*test ('mouse actions', async ({page}) => {

    await page.goto ('https://www.wikipedia.org');
    await page. fill ('input[name= search]','playwright');
    await page. click('button[type=submit]');
    await expect(page). toHaveURL(/Playwright/);
    });

test ('right click test', async({page})=> {

    await page.goto ('https://the-internet.herokuapp.com/context_menu');
    let dialogmessage = '';    
    page.on ('dialog', async (dialog) => {
        dialogmessage = dialog.message();
        await dialog.accept();
    });
    await page.locator ('#hot-spot').click({button:'right'});
    await page.waitForTimeout(10000);
    expect (dialogmessage). toBe ('You selected a context menu');
    console. log (dialogmessage);

}); 
test('double clicktest', async ({ page }) => {
    // Using a simple HTML file for double click test
    await page.setContent(`
        <html>
            <body>
                <button onclick="alert('Double Click Successful')">Double Click Me</button>
            </body>
        </html>
    `);

    let dialogmessage = '';
    page.on('dialog', async(dialog) => {
       dialogmessage =  dialog.message ();
       dialog.accept();
    });

    await page.getByRole('button').dblclick();
    expect (dialogmessage).toBe('Double Click Successful');
    console.log (dialogmessage);
});

test ('preseq test', async({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }). pressSequentially('Password123');
    await page.getByRole('button', {name: 'submit'}).click();

}); 
test ('hover iver test', async ({page}) => {

    await page.goto('https://www.wikipedia.org');
    const tooltip = page.locator ('a[title="English — Wikipedia — The Free Encyclopedia"]');
    await tooltip.hover();
    await expect(tooltip).toHaveAttribute('title', 'English — Wikipedia — The Free Encyclopedia'); 
    console.log(tooltip)
}); 

test ('select dropdown', async({page})=> {

    await page.goto ('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('select#select-demo', 'Monday')
    await expect (page.locator('.selected-value')). toHaveText ('Day selected :- Monday');
    
    }); 

test ('auto suggestion test', async({page}) => {

    await page.goto ('https://www.wikipedia.org');
    await page.fill('input[name = search]', 'Playwright');
    await page.waitForSelector('.suggestion-title');
    await page.locator('.suggestion-title').first().click();
    await expect(page). toHaveURL(/Playwright/);

});*
test ('webtable test', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('table[name="BookTable"]');
    const authName = await page.locator('table[name="BookTable"] tbody tr:nth-child(2) td:nth-child(2)').textContent();
    console.log("Author name of 2nd row:", authName);
    await expect(authName).toBe('Amit');
    await expect(page.locator('table[name="BookTable"]')).toContainText('Learn Selenium');


}); */

test ('alert messages test', async({page})=> {
await page.goto ('https://testpages.eviltester.com/styled/alerts/alert-test.html');
page.once('dialog', async(dialog)=>{
    console.log('dialog message:', dialog.message());
    await dialog.accept();
});
const alertbutton = page.locator ('#alertexamples');
await alertbutton.scrollIntoViewIfNeeded();
await alertbutton.click();
await page.waitForTimeout (3000);

page.once('dialog', async (dialog)=>{
    console.log ('dialog message:', dialog.message());
    await page.waitForTimeout (2000);
    await dialog.dismiss(); 
});
const confirmbutton = page.locator ('#confirmexample');
await confirmbutton.scrollIntoViewIfNeeded();
await confirmbutton.click();
await page.waitForTimeout (3000);  

page.once('dialog', async (dialog)=>{
    console.log ('dialog message:', dialog.message());
    await page.waitForTimeout (2000);
    await dialog.dismiss(); 
});
const promptbutton = page.locator ('#promptexample');
await promptbutton.scrollIntoViewIfNeeded();
await promptbutton.click();
await page.waitForTimeout (3000);  
});
