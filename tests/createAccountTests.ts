import { expect, test } from "@playwright/test";
import { getLatestEmail } from "../helpers/emailHelpers/email-api";
import { EmailPage } from "../helpers/emailHelpers/emailPage";
import { randomText } from "../utils/utils";
import CreateAccountPage from "../pages/createAccountPage";
import HomePage from "../pages/homePage";


test("Navigate to Create Account Page", async ({ page, baseURL }) => {
  const homePage = new HomePage(page);

  await page.goto(`${baseURL}`);
  await homePage.signupButtonClick();

  await expect(page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/create/");
  await expect(page.locator("//h1//span[contains(text(), 'Create New')]")).toHaveText("Create New Customer Account")
  
  await page.close();
});

/*
test("Successfully create account and receive an email", async ({ page, baseURL }) => {
  const createAccountPage = new CreateAccountPage(page);
  const emailPage = new EmailPage(page);
  const userName = randomText()

  const userEmail = `${userName}@mail7.io`;
  const password = "Sifra123**";

  await page.goto(`${baseURL}`);

  //await loginPage.enterEmail({ email: userEmail });
  //await loginPage.enterPassword({ password });
  //await createAccountPage.signupButtonClick();

  //const email = await getLatestEmail(userEmail);
  //await emailPage.renderContent(email.html);
  //await emailPage.clickVerifyEmailLink();

  await expect(page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/create/");
  await expect(page.locator("//h1//span[contains(text(), 'Create New')]")).toHaveText("Create New Customer Account")
  await page.close();
}); */