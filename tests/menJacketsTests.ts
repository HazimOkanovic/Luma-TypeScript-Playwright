import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { MenJacketsPage } from "../pages/menJacketsPage";
import { Constants } from "../constants";

test("Navigate to Jackets page", async ({ page, baseURL }) => {
    const homePage = new HomePage(page);
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}`);

    await homePage.hoverOverMenTab();
    await homePage.hoverOverMenTopsButton();
    await homePage.clickMenJacketsButton();

    expect(await menJacketsPage.pageTitle).toHaveText(Constants.jacketsTitle);
})

test("Sort by price", async ({ page, baseURL }) => {
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}men/tops-men/jackets-men.html`);

    await page.selectOption("#sorter", {
        value: "price"
    });

    expect(await menJacketsPage.firstProduct).toHaveText(Constants.beaumontJacket)
})

test("Sort by product name", async ({ page, baseURL }) => {
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}men/tops-men/jackets-men.html`);

    await page.selectOption("#sorter", {
        value: "name"
    });

    expect(await menJacketsPage.secondProduct).toHaveText(Constants.hyperionJacket)
})

test("Check the price", async ({ page, baseURL }) => {
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}men/tops-men/jackets-men.html`);

    await menJacketsPage.clickFirstProduct();

    expect(await menJacketsPage.productPrice).toHaveText(Constants.price)
})

test("Not selecting size and color", async ({ page, baseURL }) => {
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}proteus-fitness-jackshirt.html`);

    await menJacketsPage.clickAddToCartButton();

    expect(await menJacketsPage.sizeError).toHaveText(Constants.defaultError);
    expect(await menJacketsPage.colorError).toHaveText(Constants.defaultError);
})

test("Add ten products to cart", async ({ page, baseURL }) => {
    const menJacketsPage = new MenJacketsPage(page);
    const homePage = new HomePage(page);

    await page.goto(`${baseURL}proteus-fitness-jackshirt.html`);

    await menJacketsPage.chooseSizeL();
    await menJacketsPage.chooseBlackColor();
    await menJacketsPage.clearQuantityField();
    await menJacketsPage.enterQuantity("10");
    await menJacketsPage.clickAddToCartButton();

    expect(await homePage.cartCounterNumber).toHaveText(Constants.cartNumber);
})