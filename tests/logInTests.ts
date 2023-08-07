import { expect, test } from "../tests/baseTest";
import { Constants } from "../constants";

test("Navigate to Login Page", async ({ page, homePage, loginPage, baseURL }) => {
  await page.goto(`${baseURL}`);
  await homePage.signInButtonClick();

  await expect(loginPage.pageTitle).toHaveText(Constants.loginPageTitle)
});

test("Successful login", async ({ page, loginPage, accountPage, baseURL }) => {
  await page.goto(`${baseURL}customer/account/login/refer`);

  await loginPage.enterEmail(Constants.validEmail);
  await loginPage.enterPassword(Constants.validPass);
  await loginPage.clickSingInButton();

  await expect(accountPage.accountTitle).toHaveText(Constants.accountPageTitle)
}); 