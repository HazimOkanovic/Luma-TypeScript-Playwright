import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) { }

  async signupButtonClick() {
    await this.signUpButton.click();
  }

  async signInButtonClick() {
    await this.signInButton.click();
  }

  async hoverOverMenTab() {
    await this.menTab.hover();
  }

  async hoverOverMenTopsButton() {
    await this.manTopsButton.hover();
  }

  async clickMenJacketsButton() {
    await this.manJacketsButton.click();
  }

  get signUpButton() {
    return this.page.locator("(//a[contains(text(), 'Create an Account')])[1]");
  }

  get signInButton() {
    return this.page.locator("(//a[contains(text(), 'Sign In')])[1]");
  }

  get menTab() {
    return this.page.locator("//span[text() = 'Men']");
  }

  get manTopsButton() {
    return this.page.locator("(//span[text() = 'Tops'])[2]");
  }

  get manJacketsButton() {
    return this.page.locator("(//span[text() = 'Jackets'])[2]");
  }
}
