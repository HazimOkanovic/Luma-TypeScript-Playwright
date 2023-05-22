import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) { }

  async signupButtonClick() {
    await this.signUpButton.click();
  }

  async signInButtonClick() {
    await this.signInButton.click();
  }

  get signUpButton() {
    return this.page.locator("(//a[contains(text(), 'Create an Account')])[1]");
  }

  get signInButton() {
    return this.page.locator("(//a[contains(text(), 'Sign In')])[1]");
  }
}
