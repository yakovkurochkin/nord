exports.ProductsPage = class ProductsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.buyNordVpnButton = page.locator('//*[text()="NordVPN"]');
  }

  async clickBuyVpn() {
    await this.buyNordVpnButton.click();
    await this.page.waitForNavigation();
  }

  async goto() {
    await this.page.goto('https://nordcheckout.com/products');
  }
};
