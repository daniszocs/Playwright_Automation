import {test, expect} from '@playwright/test';

test('Aserions Demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    //ASSERTIONS
    //check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    if( await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    //check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()
    //check element enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()
    //check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen')
    //check attribute value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class','chakra-heading css-dpmy2a')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class',/.*css-dpmy2a/)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)
    //check URL
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveURL(/.*kitchen.applitools.*/)
    //check title
    await expect(page).toHaveTitle('The Kitchen')
    await expect(page).toHaveTitle(/.*Kitchen/)
    // visual validation with screenshot
    await page.pause()
    await expect(page).toHaveScreenshot();
}   
   
});