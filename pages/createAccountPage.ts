import { Page } from "@playwright/test";

export default class CreateAccountPage {
  constructor(public page: Page) {}

  async enterFirstName(value: {firstName: string}) {
    await this.firstNameInput.type(value.firstName);
  }

  async enterLastName(value: {lastName: string}) {
    await this.lastNameInput.type(value.lastName);
  }

  async enterEmail(value: { email: string }) {
    await this.emailInput.type(value.email);
  }

  async enterPassword(value: { password: string }) {
    await this.passwordInput.type(value.password);
  }

  async enterConfirmPassword(value: {confirmPassword: string}) {
    await this.passwordConfirmationInput.type(value.confirmPassword);
  }

  async createAccountButtonClick() {
    await this.createAccountButton.click();
  }

  get firstNameInput(){
    return this.page.locator("//input[@id='firstname']");
  }

  get lastNameInput(){
    return this.page.locator("//input[@id='lastname']");
  }

  get emailInput() {
    return this.page.locator("//input[@id='email_address']");
  }

  get passwordInput() {
    return this.page.locator("//input[@id='password']");
  }

  get passwordConfirmationInput(){
    return this.page.locator("//input[@id='password-confirmation']")
  }

  get createAccountButton(){
    return this.page.locator("//button[@title='Create an Account']");
  }
}
