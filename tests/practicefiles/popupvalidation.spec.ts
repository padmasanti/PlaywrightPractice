import {test, expect} from '@playwright/test';
// import * as  path from 'path';
test ('popup validation', async ({page}) => {
    // Replace with the actual URL or file URL to your HTML file
    const filepath = 'C:\\Users\\284583\\PW_Practice\\tests\\login_page.html'; // Update this path
    await page.goto(filepath);

    console.log ("page url is:", page.url());
    
    const username = page.getByLabel("Username");
    await username.fill('admin');
    const password = page.getByLabel("Password");
    await password.fill('password123');
    console.log ("this step is okay")
    
    console.log ('this one also okay');
    page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});

  });
   await page.getByRole('button', {name: 'Login'}).click();
   console.log ('this one called after click of the button okay');
   
      /*  page.once('dialog', dialog => {
        console.log ('this one also too okay');
        console.log('Dialog message:', (dialog.message()));
        expect (dialog.message()).toBe('Login Successful');
      
    });
    */

});



