import {test, expect, chromium} from '@playwright/test'
test('Slow Motion Video Recording Demo', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {
                width: 800,
                height: 600
            }
        }
    });

    const page = await context.newPage()

    await page.goto('https://admin-demo.nopcommerce.com/login');
  
  
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();

    await context.close()
    await browser.close()

})