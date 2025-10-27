import {test, expect} from '@playwright/test';
test ('sample test script with assertions', async({page}) => {

    await page.goto ('https://wikipedia.org/');
    const searchbox = page.locator ('input[name="search"]');
    await expect(searchbox).toHaveAttribute ('autofocus', 'autofocus');
    await expect (searchbox).toBeVisible();
    await searchbox.fill ('Playwright');
    await expect (searchbox).toHaveValue ('Playwright');
    if (searchbox.inputValue() != 'Playwright') 
    {
        throw new Error ('Search box does not contain the correct value.');
    }
    await page.locator ('button[type="submit"]').click();
    await expect(page).toHaveURL(/Playwright/);
    await expect(page.locator('#firstHeading')).toHaveText('Playwright');
      

});


