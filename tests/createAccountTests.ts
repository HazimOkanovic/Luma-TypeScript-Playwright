import { expect, test } from "@playwright/test";
import { CreateAccountPage } from "../pages/createAccountPage";
import { HomePage } from "../pages/homePage";
import { EmailPage } from "../helpers/emailHelper/emailPage";
import { Constants } from "../constants";

test("Navigate to Create Account Page", async ({ page, baseURL }) => {
  const homePage = new HomePage(page);
  const createAccountPage = new CreateAccountPage(page);

  await page.goto(`${baseURL}`);
  await homePage.signupButtonClick();

  await expect(createAccountPage.pageTitle).toHaveText(Constants.createAccountPageTitle)

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

test("Leaving all required fields empty", async ({ page, baseURL }) => {
  const createAccountPage = new CreateAccountPage(page);

  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.createAccountButtonClick();

  await expect(createAccountPage.firstNameError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.lastNameError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.emailError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.passwordError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.passwordConfirmationError).toHaveText(Constants.defaultError);

  await page.close();
});

test("Entering different passwords", async ({ page, baseURL, context }) => {
  const createAccountPage = new CreateAccountPage(page);

  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.enterFirstName(Constants.name);
  await createAccountPage.enterLastName(Constants.name);
  await createAccountPage.enterEmail(Constants.userEmail);
  await createAccountPage.enterPassword(Constants.password);
  await createAccountPage.enterConfirmPassword(Constants.name);
  await createAccountPage.createAccountButtonClick();

  await expect(createAccountPage.passwordConfirmationError).toHaveText(Constants.samePasswordError)

  await page.close();
});

test("Entering invalid email", async ({ page, baseURL, context }) => {
  const createAccountPage = new CreateAccountPage(page);

  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.enterFirstName(Constants.name);
  await createAccountPage.enterLastName(Constants.name);
  await createAccountPage.enterEmail(Constants.name);
  await createAccountPage.enterPassword(Constants.password);
  await createAccountPage.enterConfirmPassword(Constants.password);
  await createAccountPage.createAccountButtonClick();

  await expect(createAccountPage.emailError).toHaveText(Constants.emailError)

  await page.close();
}); 