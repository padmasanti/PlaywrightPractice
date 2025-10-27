import { test, expect } from '@playwright/test';
async function validationsearchresult(page: any, rowindex: number, expectedresult: string)
{
    const row = page.locator(`.mw-search-results li:nth-child(${rowindex})`);
    await expect(row).toBeVisible();
    const actualtest = await row.innerText();
    console.log(actualtest);
    return actualtest.includes(expectedresult);
}

test ('validate playwright search results', async({page}) => {
    await page.goto('https://en.wikipedia.org/w/index.php?search=playwright+test&title=Special%3ASearch&profile=advanced&fulltext=1&ns0=1');
    const isvalid = await validationsearchresult(page, 1, 'Playwright');
    expect(isvalid).toBeTruthy();

});

