const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {

  await page.goto("https://demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  await expect(page).toHaveTitle('STORE');

  const pageURL = page.url();
  console.log('Page URL is:', pageURL);

  await expect(page).toHaveURL("https://demoblaze.com/index.html");



});
