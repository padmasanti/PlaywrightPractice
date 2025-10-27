import test from '@playwright/test';
import Page from '@playwright/test';
import { login } from '../extensions/custom_extenstion.js';
test('customfunctionlogin', async({ page }: { page: Page }) => {
    await login(page, 'student', 'Password123');
});
