import { expect, test } from "@playwright/test";
import CreateAccountPage from "../pages/createAccountPage";
import HomePage from "../pages/homePage";
import { EmailPage } from "../helpers/emailHelper/emailPage";
import { Constants } from "../constants";

test("Navigate to Create Account Page", async ({ page, baseURL }) => {
  const homePage = new HomePage(page);

  await page.goto(`${baseURL}`);
  await homePage.signupButtonClick();

  await expect(page.locator("//h1//span[contains(text(), 'Create New')]")).toHaveText("Create New Customer Account")
  
  await page.close();
}); 

test("Successfully create account and receive an email", async ({ page, baseURL, context }) => {
  const createAccountPage = new CreateAccountPage(page);
  
  
  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.enterFirstName(Constants.name);
  await createAccountPage.enterLastName(Constants.name);
  await createAccountPage.enterEmail(Constants.userEmail);
  await createAccountPage.enterPassword(Constants.password);
  await createAccountPage.enterConfirmPassword(Constants.password);
  await createAccountPage.createAccountButtonClick();

  const secondTab = await context.newPage();
  const emailPage = new EmailPage(secondTab);
  await emailPage.verifyReceivedEmail(Constants.name);
 
  await page.close();
}); 