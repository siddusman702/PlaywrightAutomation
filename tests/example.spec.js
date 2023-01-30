// @ts-check
//const { chromium } = require('@playwright/test');
const { test, expect } = require('@playwright/test');


test('homepage has title and links to intro page @regression', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();
  
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);

  //await page.pause();
});

test('homepage has title and links to writing page @smoke', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  //Fetching writing Tests
  await page.locator('.menu__link >> text=Writing Tests').click();
  
  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*writing-tests/);

  await page.pause();
});

test('Verify the login page @feature', async ({ page }) => {
  test.fail();
  // ...
});

test('skipped test', async ({ page }) => {
  test.skip();
  // ...
});


 
