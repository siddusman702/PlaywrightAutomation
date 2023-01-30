const { test, expect } = require("@playwright/test");
const { SideBar } = require("../POM/SideBar");



test("homepage has title and links to intro page after clicking on SideBar @sideBar", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  let sideBar = new SideBar(page);
  await sideBar.clickGetStarted();
  await expect(page).toHaveURL(/.*intro/);
});

test("homepage has title and links to writing page @writing", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole("link", { name: "Get started" });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  //Fetching writing Tests
  await page.locator(".menu__link >> text=Writing Tests").click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*writing-tests/);

  await page.pause();
});
