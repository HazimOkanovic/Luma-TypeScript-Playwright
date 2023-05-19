import { Page } from "@playwright/test";

export default class CreateAccountPage {
  constructor(public page: Page) { }

  async enterFirstName( name: string ) {
    await this.firstNameInput.type(name);
  }

  async enterLastName( name: string ) {
    await this.lastNameInput.type(name);
  }

  async enterEmail( email: string ) {
    await this.emailInput.type(email);
  }

  async enterPassword( password: string ) {
    await this.passwordInput.type(password);
  }

  async enterConfirmPassword( password: string ) {
    await this.passwordConfirmationInput.type(password);
  }

  async createAccountButtonClick() {
    await this.createAccountButton.click();
  }

  async getFirstNameError(){
    await this.firstNameError.textContent();
  }

  async getLastNameError(){
    await this.lastNameError.textContent();
  }

  async getEmailError(){
    await this.emailError.textContent();
  }

  async getPasswordError(){
    await this.passwordError.textContent();
  }

  async getPasswordConfirmationError(){
    await this.passwordConfirmationError.textContent();
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

  get pageTitle(){
    return this.page.locator("//span[@data-ui-id='page-title-wrapper']");
  }

  get firstNameError(){
    return this.page.locator("#firstname-error");
  }

  get lastNameError(){
    return this.page.locator("#lastname-error");
  }

  get emailError(){
    return this.page.locator("#email_address-error");
  }

  get passwordError(){
    return this.page.locator("#password-error");
  }

  get passwordConfirmationError(){
    return this.page.locator("#password-confirmation-error");
  }
}
