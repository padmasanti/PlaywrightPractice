import {test, expect} from '@playwright/test';
test ('form submission test', async({page})=> {
    page.goto ('https://formy-project.herokuapp.com/form');
    await page.locator ('#first-name'). fill ('John');
    await page.locator ('#last-name'). fill ('John');
    await page.locator ('#job-title'). fill ('QA Engineer');
    await page.locator ('#radio-button-2'). check ();
    await page.locator('#checkbox-1'). check ();
    await page.locator ('#select-menu'). selectOption ('1');
    await page.locator ('#datepicker'). fill ('10/10/2024');
    await page.locator ('#datepicker'). press ('Enter');
    await page.waitForTimeout (2000);
    await page.getByRole('button', {name: 'Submit'}). click ();

});