import { test, expect } from '@playwright/test';

/*test('iframevalidations', async({page}) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    const frame = page.frameLocator('#singleframe');
    const inputtext = frame.locator('//input[@type="text"]');
    await inputtext.fill('iframe test successful');
    const thevalue = await inputtext.inputValue();
    console.log(thevalue);
    expect(thevalue).toBe('iframe test successful');

});*/

/*test ('iframe with url', async({page})=> {

    await page.goto ('https://demo.automationtesting.in/Frames.html');
     frames = await page.frame ({url: "https://demo.automationtesting.in/SingleFrame.html"});
    await frame.fill ('//input[@type="text"]', 'iframe with url test successful'); 

});*/

/*test ('ifeame with short url va;idation', async({page})=> {

    await page.goto ('https://demo.automationtesting.in/Frames.html');
    const frame = await page .frame ({url: /SingleFrame/});
    await frame. fill ("//input[@type='text']", 'iframesuccessful with short url');
});*/

/*test ('ifeame with short url va;idation', async({page})=> {

    await page.goto ('https://demo.automationtesting.in/Frames.html');
    const frame = await page .frame ({name: "SingleFrame"});
    await frame. fill ("//input[@type='text']", 'iframesuccessful with short url');
});*/

test ('ifeame with frame index va;idation', async({page})=> {

    await page.goto ('https://demo.automationtesting.in/Frames.html');
    const framecount = await page .frames();
    const frame = framecount[1];
    await frame. fill ("//input[@type='text']", 'iframesuccessful with index');
    await page.waitForTimeout (5000);
});