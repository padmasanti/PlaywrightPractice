import { test, expect }  from '@playwright/test';
import { readCSV } from "../utils/dataLoader_csv.js";

const dataset = readCSV('tests/data/loginDataC.csv');

for (const data of dataset) {
  test(`Login test for ${data.username}`, async ({ page }: { page: any }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(data.username);
    await page.getByPlaceholder('Password').fill(data.password);
    await page.getByRole('button', { name: 'Login' }).click();

    if (data.username === 'standard_user') {
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      console.log(`Login successful with user: ${data.username}`);
    } else {
      const errormessage = page.locator('div[class="error-message-container error"] h3');
      await expect(errormessage).toBeVisible();
      const errorText = await errormessage.textContent();
      console.log(`Login unsuccessful with user: ${data.username}`);
      console.log(`Error message: ${errorText}`);
    }
  });
}
