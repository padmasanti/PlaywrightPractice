import {test, expect} from '@playwright/test';
/*test ('screen size and screenshot test', async({page},testinfo)=> {

    await page.goto('https://wikipedia.org/');
    const screenshot = await page.screenshot();
    testinfo.attach('screenshot', {body: screenshot, contentType:'image/png'});
    expect (page.url()).toContain('test');
});*/

test ('screen size and screenshot test', async({page})=> {

    await page.goto('https://wikipedia.org/');
    try{
    await expect (page.locator('h1')).toHaveText('no title found' );
    }
    catch (error){
        await page.screenshot({path:'screenshot.png'});
        throw error;
    }
   
});