const { test, expect } = require('../fixtures/base.test');

test('price between checkout and payment pages', async ({
  productsPage,
  checkoutPage,
  paymentPage,
  page,
}) => {
  await productsPage.goto();
  await productsPage.clickBuyVpn();

  await checkoutPage.clickLogin();
  await expect(page).toHaveURL(/login/);
  await page.goBack({ waitUntil: 'networkidle' });

  const oneYearPrice = await checkoutPage.oneYearPriceSpan.allTextContents();
  await checkoutPage.oneYearPlanCard.click();
  await checkoutPage.clickGoToPayment();

  const finalPrice = await paymentPage.finalPriceSpan.allTextContents();
  await expect(oneYearPrice).toEqual(finalPrice);
});
