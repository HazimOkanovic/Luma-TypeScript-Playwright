import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SalePage } from "../pages/salePage";

test("Go to Sales page",async ({page, baseURL}) => {
    const homePage = new HomePage(page);
    const salePage = new SalePage(page);

    await page.goto(`${baseURL}`);
    await homePage.clickSaleTab;
    expect(await page.url()).toMatch("https://magento.softwaretestingboard.com/sale.html"); 
})

test("Shop Men Deals",async ({page, baseURL}) => {
    const homePage = new HomePage(page);
    const salePage = new SalePage(page);

    await page.goto(`${baseURL}`);
    await homePage.clickSaleTab;
    expect(await salePage.pageTitle).toHaveText("Sale"); 

    await salePage.clickShopMenDeals();
    expect(await salePage.pageTitle).toHaveText("Men Sale"); 
})