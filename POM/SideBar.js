const { test, expect } = require("@playwright/test");

class SideBar {
  constructor(page) {
    this.page = page;
    // this.selector = selector;
    // this.locator=locator;
  }
  async clickGetStarted() {
    const getStarted = await this.page.getByRole("link", { name: "Get started" });
    // Click the get started link.
    return await getStarted.click();
  }

  async getPlaywrightTitle(){

  }
}
module.exports = { SideBar };
