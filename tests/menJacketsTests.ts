import { expect, test } from "@playwright/test";
import HomePage from "../pages/homePage";
import MenJacketsPage from "../pages/menJacketsPage";

test("Navigate to Jackets page", async({page, baseURL}) => {
    const homePage = new HomePage(page);
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}`);

    await homePage.hoverOverMenTab();
    await homePage.hoverOverMenTopsButton();
    await homePage.clickMenJacketsButton();

    expect(await menJacketsPage.pageTitle).toHaveText("Jackets");
})

test("Sort by price", async({page, baseURL}) => {
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}men/tops-men/jackets-men.html`);

    await page.selectOption("#sorter", {
        value: "price"
    });

    expect(await menJacketsPage.firstProduct).toHaveText("Beaumont Summit Kit")
})

test("Sort by product name", async({page, baseURL}) => {
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}men/tops-men/jackets-men.html`);

    await page.selectOption("#sorter", {
        value: "name"
    });

    expect(await menJacketsPage.secondProduct).toHaveText("Hyperion Elements Jacket")
})

test("Check the price", async({page, baseURL}) => {
    const menJacketsPage = new MenJacketsPage(page);

    await page.goto(`${baseURL}men/tops-men/jackets-men.html`);

    await menJacketsPage.clickFirstProduct();

    expect(await menJacketsPage.productPrice).toHaveText("$45.00")
})