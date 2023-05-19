import { expect, test } from "@playwright/test";
import { getLatestEmail } from "../helpers/emailHelpers/email-api";
import { EmailPage } from "../helpers/emailHelpers/emailPage";
import { randomText } from "../utils/utils";
import CreateAccountPage from "../pages/createAccountPage";
import HomePage from "../pages/homePage";
import { SecondEmailPage } from "../helpers/emailHelpers/secondEmailPage";

/*
test("Navigate to Create Account Page", async ({ page, baseURL }) => {
  const homePage = new HomePage(page);

  await page.goto(`${baseURL}`);
  await homePage.signupButtonClick();

  await expect(page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/create/");
  await expect(page.locator("//h1//span[contains(text(), 'Create New')]")).toHaveText("Create New Customer Account")
  
  await page.close();
}); */


test("Successfully create account and receive an email", async ({ page, baseURL, context }) => {
  const createAccountPage = new CreateAccountPage(page);
  const emailPage = new EmailPage(page);
  
  const name = randomText()

  const userEmail = `${name}@inboxkitten.com`;
  const password = "Sifra123**";
  
  await page.goto(`${baseURL}customer/account/create`);

  await createAccountPage.enterFirstName({ name });
  await createAccountPage.enterLastName({ name });
  await createAccountPage.enterEmail({ email: userEmail });
  await createAccountPage.enterPassword({ password });
  await createAccountPage.enterConfirmPassword({ password });
  await createAccountPage.createAccountButtonClick();

  const secondTab = await context.newPage();
  const secondEmailPage = new SecondEmailPage(secondTab);
  await secondEmailPage.verifyReceivedEmail({name});
 
  await page.close();
}); 