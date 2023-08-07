import { expect, test } from "./baseTest";
import { Constants, pagesURL } from "../constants";

test.beforeEach(async ({ page, baseURL }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(`${baseURL}`);
});

test("Navigate to Login Page", async ({ homePage, loginPage }) => {
  await homePage.signInButtonClick();

  await expect(loginPage.pageTitle).toHaveText(Constants.loginPageTitle)
});

test("Successful login", async ({ page, loginPage, accountPage, baseURL }) => {
  await page.goto(`${baseURL}` + pagesURL.loginPage);

  await loginPage.enterEmail(Constants.validEmail);
  await loginPage.enterPassword(Constants.validPass);
  await loginPage.clickSingInButton();

  await expect(accountPage.accountTitle).toHaveText(Constants.accountPageTitle)
}); 