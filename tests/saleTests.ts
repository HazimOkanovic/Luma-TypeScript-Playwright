import { test, expect } from "../tests/baseTest";

test.beforeEach(async ({ page, baseURL }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto(`${baseURL}`);
});

test("Go to Sales page", async ({ page, homePage }) => {
    await homePage.clickSaleTab;
    expect(await page.url()).toMatch("https://magento.softwaretestingboard.com/sale.html");
})

test("Shop Men Deals", async ({ homePage, salePage }) => {
    await homePage.clickSaleTab;
    expect(await salePage.pageTitle).toHaveText("Sale");

    await salePage.clickShopMenDeals();
    expect(await salePage.pageTitle).toHaveText("Men Sale");
})