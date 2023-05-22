import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import { Constants } from "../constants";
import AccountPage from "../pages/accountPage";

test("Navigate to Login Page", async ({ page, baseURL }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
  
    await page.goto(`${baseURL}`);
    await homePage.signInButtonClick();
  
    await expect(loginPage.pageTitle).toHaveText("Customer Login")
    
    await page.close();
  }); 

  test("Successful login", async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);
  
    await page.goto(`${baseURL}customer/account/login/refer`);
     
    await loginPage.enterEmail("hazim.okanovic@mail7.io");
    await loginPage.enterPassword("Something1.");
    await loginPage.clickSingInButton();

    await expect(accountPage.accountTitle).toHaveText("My Account")
    
    await page.close();
  }); 