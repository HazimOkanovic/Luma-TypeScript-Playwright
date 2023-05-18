import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) { }

  async signupButtonClick() {
    await this.signUpButton.click();
  }

  get signUpButton() {
    return this.page.locator("(//a[contains(text(), 'Create an Account')])[1]");
  }
}
