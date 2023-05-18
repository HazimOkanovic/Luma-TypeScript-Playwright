import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async enterEmail(value: { email: string }) {
    await this.emailInput.type(value.email);
  }

  async enterPassword(value: { password: string }) {
    await this.passewordInput.type(value.password);
  }

  async signupButtonClick() {
    await this.signUpButton.click();
  }

  get emailInput() {
    return this.page.locator("#email");
  }

  get passewordInput() {
    return this.page.locator("#password");
  }

  get signUpButton() {
    return this.page.locator("(//a[contains(text(), 'Create an Account')])[1]");
  }
}
