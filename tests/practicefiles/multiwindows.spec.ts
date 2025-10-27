import{test, expect, chromium, firefox, webkit} from '@playwright/test';
test( 'multiple windows / tabs', async() => {

    const browser = await firefox.launch({headless:false});
    const context = await browser.newContext ();
    const page = await context.newPage ();

    await page.goto('https://the-internet.herokuapp.com/windows');
    await page.screenshot({path:'wondow1.png'});

    const[newWindow] = await  Promise.all([

        page.waitForEvent('popup'),
        page.click('//*[@id="content"]/div/a'),

    ]);
    console. log ('old window title:', await page.title());
    console. log('new window title:', await newWindow.title());

    await newWindow.screenshot ({path:'window2.png'});
    await newWindow.close();
    await browser.close ();

  });