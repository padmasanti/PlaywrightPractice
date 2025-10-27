import {test, expect} from '@playwright/test';
/*test ('validatewith screenshots', async({page}) => {
    await page.goto('https://wikipedia.org/');
    await page.screenshot({path: 'wikipedia_homepage.png', fullPage: true});

});*/

/*test ('validatewith screenshots at element', async({page}) => {
    await page.goto('https://wikipedia.org/');
    await page.locator ('input[name="search"]').screenshot({path: 'wikipedia_searchbox.png'});
    //screenshot({path: 'wikipedia_searchbox.png'});
    
});*/

test ('validatewith screenshots at error', async({page}) => {
    await page.goto('https://wikipedia.org/');
   try{
    await expect (page.locator ('h1')).toHaveText('notitle');
   } catch (error){
    console.log ('Error occurred, taking screenshot');
    await page.screenshot({path: 'wikipedia_error.png'});
    throw error;
   } 
        
});
    
    