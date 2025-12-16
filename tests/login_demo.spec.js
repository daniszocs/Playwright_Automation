import {test, expect} from '@playwright/test';

test('Demo Login Test 1', async ({page}) => {

    await page.goto('https://demo.applitools.com/');
    //await page.pause()
    //await page.getByRole('textbox', { name: 'Enter your username' }).fill('Raghav')
    //await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234')
    //await page.getByRole('link', { name: 'Sign in' }).click()
    await page.locator('[placeholder="Enter your username"]').fill('Raghav')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
    await page.waitForSelector('text="Sign in"', {timeout:5000})
    await page.locator('text="Sign in"').click()

})

test('Demo Login Test 2', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause()
    
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'akash lala' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})


test.only('Demo Login Test 3', async ({page}) => {

  await page.pause()
  await page.goto('https://admin-demo.nopcommerce.com/login');
  
  
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
})