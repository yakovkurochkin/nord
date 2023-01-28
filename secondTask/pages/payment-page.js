exports.PaymentPage = class PaymentPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.finalPriceSpan = page.locator('[data-testid="SelectedCartSummaryCard-total-price"]');
  }
};
