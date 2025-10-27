import{test, expect} from '@playwright/test';
let frame:any;
test('iframevalidations', async({page})=> {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    frame = await page.frameLocator('#singleframe');
    const inputtext = await frame.locator('//input[@type="text"]');
    inputtext.fill('iframe test successful');
    const thevalue = inputtext.textContent();
    console.log(thevalue);
 

});