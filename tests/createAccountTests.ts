import { expect, test } from "../tests/baseTest";
import { Constants } from "../constants";
import { EmailPage } from "../helpers/emailHelper/emailPage";

test("Navigate to Create Account Page", async ({ page, homePage, createAccountPage, baseURL }) => {
  await page.goto(`${baseURL}`);
  await homePage.signupButtonClick();

  await expect(createAccountPage.pageTitle).toHaveText(Constants.createAccountPageTitle)
});

test("Successfully create account and receive an email", async ({ page, createAccountPage, baseURL, context }) => {
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
});

test("Leaving all required fields empty", async ({ page, createAccountPage, baseURL }) => {
  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.createAccountButtonClick();

  await expect(createAccountPage.firstNameError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.lastNameError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.emailError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.passwordError).toHaveText(Constants.defaultError);
  await expect(createAccountPage.passwordConfirmationError).toHaveText(Constants.defaultError);
});

test("Entering different passwords", async ({ page, createAccountPage, baseURL }) => {
  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.enterFirstName(Constants.name);
  await createAccountPage.enterLastName(Constants.name);
  await createAccountPage.enterEmail(Constants.userEmail);
  await createAccountPage.enterPassword(Constants.password);
  await createAccountPage.enterConfirmPassword(Constants.name);
  await createAccountPage.createAccountButtonClick();

  await expect(createAccountPage.passwordConfirmationError).toHaveText(Constants.samePasswordError)
});

test("Entering invalid email", async ({ page, baseURL, createAccountPage }) => {
  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.enterFirstName(Constants.name);
  await createAccountPage.enterLastName(Constants.name);
  await createAccountPage.enterEmail(Constants.name);
  await createAccountPage.enterPassword(Constants.password);
  await createAccountPage.enterConfirmPassword(Constants.password);
  await createAccountPage.createAccountButtonClick();

  await expect(createAccountPage.emailError).toHaveText(Constants.emailError)
}); 