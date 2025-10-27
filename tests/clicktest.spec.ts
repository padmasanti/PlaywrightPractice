import {test, expect} from '@playwright/test';

test ('mouse actions', async ({page}) => {

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
    await page.locator ('#"hot-spot"').click({button:'right'});
    await page.waitForTimeout(10000);
    expect (dialogmessage). toBe ('You selected a context menu');


});