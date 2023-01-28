const base = require('@playwright/test');
const { ProductsPage } = require('../pages/products-page');
const { CheckoutPage } = require('../pages/checkout-page');
const { PaymentPage } = require('../pages/payment-page');

exports.test = base.test.extend({
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
});

exports.expect = base.expect;
