// @ts-check
import { test, expect } from '@playwright/test';

/**
 * @type {import("playwright-core").BrowserContext}
 */
let context;
/**
 * @type {import("playwright-core").Page}
 */
let page;

test.beforeAll(async ({browser}) => {
  // Code to run before all tests
  context = await browser.newContext();
  await context.tracing.start(
    {
      screenshots: true,
      snapshots: true
    })
    page = await context.newPage();
});

test.afterAll(async () => {
  
  // Code to run after all tests
  await context.tracing.stop({ path: 'test-trace.zip' });
});

test('has title', async ({ }) => {

  /*await context.tracing.start(
    {
      screenshots: true,
      snapshots: true
    });*/

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  //await context.tracing.stop({ path: 'test1_trace.zip' });
});

test('get started link', async ({ }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
