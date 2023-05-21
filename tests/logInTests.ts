import { expect, test } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import { Constants } from "../constants";

test("Navigate to Login Page", async ({ page, baseURL }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
  
    await page.goto(`${baseURL}`);
    await homePage.signInButtonClick();
  
    await expect(loginPage.pageTitle).toHaveText("Customer Login")
    
    await page.close();
  }); 