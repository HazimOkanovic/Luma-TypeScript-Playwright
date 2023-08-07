import { expect, test } from "./baseTest";
import { Constants, pagesURL } from "../constants";

test.beforeEach(async ({ page, baseURL }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto(`${baseURL}`);
});

test("Navigate to Jackets page", async ({ homePage, menJacketsPage, baseURL }) => {
    await homePage.hoverOverMenTab();
    await homePage.hoverOverMenTopsButton();
    await homePage.clickMenJacketsButton();

    expect(await menJacketsPage.pageTitle).toHaveText(Constants.jacketsTitle);
})

test("Sort by price", async ({ page, menJacketsPage, baseURL }) => {
    await page.goto(`${baseURL}` + pagesURL.menJackets);

    await page.selectOption("#sorter", {
        value: "price"
    });

    expect(await menJacketsPage.firstProduct).toHaveText(Constants.beaumontJacket)
})

test("Sort by product name", async ({ page, menJacketsPage, baseURL }) => {
    await page.goto(`${baseURL}` + pagesURL.menJackets);

    await page.selectOption("#sorter", {
        value: "name"
    });

    expect(await menJacketsPage.secondProduct).toHaveText(Constants.hyperionJacket)
})

test("Check the price", async ({ page, menJacketsPage, baseURL }) => {
    await page.goto(`${baseURL}` + pagesURL.menJackets);

    await menJacketsPage.clickFirstProduct();

    expect(await menJacketsPage.productPrice).toHaveText(Constants.price)
})

test("Not selecting size and color", async ({ page, menJacketsPage, baseURL }) => {
    await page.goto(`${baseURL}` + pagesURL.proteusJackshirt);

    await menJacketsPage.clickAddToCartButton();

    expect(await menJacketsPage.sizeError).toHaveText(Constants.defaultError);
    expect(await menJacketsPage.colorError).toHaveText(Constants.defaultError);
})

test("Add ten products to cart", async ({ page, homePage, menJacketsPage, baseURL }) => {
    await page.goto(`${baseURL}` + pagesURL.proteusJackshirt);

    await menJacketsPage.chooseSizeL();
    await menJacketsPage.chooseBlackColor();
    await menJacketsPage.clearQuantityField();
    await menJacketsPage.enterQuantity("10");
    await menJacketsPage.clickAddToCartButton();

    expect(await homePage.cartCounterNumber).toHaveText(Constants.cartNumber);
})