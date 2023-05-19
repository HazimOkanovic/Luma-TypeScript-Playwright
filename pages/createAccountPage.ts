import { Page } from "@playwright/test";

export default class CreateAccountPage {
  constructor(public page: Page) { }

  async enterFirstName(name: string) {
    await this.firstNameInput.type(name);
  }

  async enterLastName(name: string) {
    await this.lastNameInput.type(name);
  }

  async enterEmail(email: string ) {
    await this.emailInput.type(email);
  }

  async enterPassword( password: string ) {
    await this.passwordInput.type(password);
  }

  async enterConfirmPassword(password: string) {
    await this.passwordConfirmationInput.type(password);
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
