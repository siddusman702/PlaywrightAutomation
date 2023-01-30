const { test, expect } = require('@playwright/test');

test('not yet ready', async ({ page }) => {
  test.fail();
  // ...
});

test('test to be fixed', async ({ page }) => {
    test.fixme();
    // ...
  });

  test('skipped test', async ({ page }) => {
    test.skip();
    // ...
  });

  test('Test login page @fast', async ({ page }) => {
    // ...
   });
   
   test('Test full report @slow', async ({ page }) => {
    // ...
   });