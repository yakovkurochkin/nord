exports.CheckoutPage = class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('[data-testid="UserProfile-login-button"]');
    this.oneYearPlanCard = page.locator('div:nth-of-type(2) [data-testid="MainPlanCard"]');
    this.oneYearPriceSpan = this.oneYearPlanCard.locator('[data-testid="TotalBilledText-total-price"]');
    this.goToPaymentButton = page.locator('[data-testid="StickyButton"] [data-testid="PaymentButton"]:not(.disabled)');
  }

  async clickLogin() {
    await this.loginButton.click();
    await this.page.waitForNavigation();
  }

  async clickGoToPayment() {
    await this.goToPaymentButton.click();
    await this.page.waitForNavigation();
  }
};
