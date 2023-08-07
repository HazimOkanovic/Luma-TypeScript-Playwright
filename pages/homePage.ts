import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page
  readonly signUpButton: Locator
  readonly signInButton: Locator
  readonly menTab: Locator
  readonly manTopsButton: Locator
  readonly manJacketsButton: Locator
  readonly cartCounterNumber: Locator
  readonly saleTab: Locator

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.getByRole('link', { name: 'Create an Account' });
    this.signInButton = page.getByRole('link', { name: 'Sign In' });
    this.menTab = page.getByRole('menuitem', { name: ' Men' });
    this.manTopsButton = page.getByRole('menuitem', { name: ' Tops' });
    this.manJacketsButton = page.getByRole('menuitem', { name: 'Jackets' });
    this.cartCounterNumber = page.locator("//span[@class = 'counter-number']");
    this.saleTab = page.getByRole('menuitem', { name: 'Sale' });
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

  async clickSaleTab(){
    await this.saleTab.click();
  }
}
