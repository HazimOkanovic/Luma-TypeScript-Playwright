import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page
  readonly signUpButton: Locator
  readonly signInButton: Locator
  readonly menTab: Locator
  readonly manTopsButton: Locator
  readonly manJacketsButton: Locator
  readonly cartCounterNumber: Locator

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.locator('a', { hasText: 'Create an Account' });
    this.signInButton = page.locator('a', { hasText: 'Sign In' });
    this.menTab = page.locator('span', { hasText: 'Men' });
    this.manTopsButton = page.locator('span', { hasText: 'Tops' });
    this.manJacketsButton = page.locator('span', { hasText: 'Jackets' });
    this.cartCounterNumber = page.locator("//span[@class = 'counter-number']");
  }

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
}
