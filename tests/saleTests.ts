import { test, expect } from "../tests/baseTest";

test("Go to Sales page", async ({ page, homePage, baseURL }) => {
    await page.goto(`${baseURL}`);
    await homePage.clickSaleTab;
    expect(await page.url()).toMatch("https://magento.softwaretestingboard.com/sale.html");
})

test("Shop Men Deals", async ({ page, homePage, salePage, baseURL }) => {
    await page.goto(`${baseURL}`);
    await homePage.clickSaleTab;
    expect(await salePage.pageTitle).toHaveText("Sale");

    await salePage.clickShopMenDeals();
    expect(await salePage.pageTitle).toHaveText("Men Sale");
})