import { Page, Locator } from "@playwright/test";

export class CreateAccountPage {
  readonly page: Page
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly passwordConfirmationInput: Locator
  readonly createAccountButton: Locator
  readonly pageTitle: Locator
  readonly firstNameError: Locator
  readonly lastNameError: Locator
  readonly emailError: Locator
  readonly passwordError: Locator
  readonly passwordConfirmationError: Locator

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#firstname");
    this.lastNameInput = page.locator('#lastname');
    this.emailInput = page.locator('#email_address');
    this.passwordInput = page.locator('#password');
    this.passwordConfirmationInput = page.locator('#password-confirmation');
    this.createAccountButton = page.locator('button', { hasText: 'Create' });
    this.pageTitle = page.locator('span', { hasText: 'Account' });
    this.firstNameError = page.locator('#firstname-error');
    this.lastNameError = page.locator('#lastname-error');
    this.emailError = page.locator('#email_address-error');
    this.passwordError = page.locator('#password-error');
    this.passwordConfirmationError = page.locator('#password-confirmation-error')
  }

  async enterFirstName(name: string) {
    await this.firstNameInput.type(name);
  }

  async enterLastName(name: string) {
    await this.lastNameInput.type(name);
  }

  async enterEmail(email: string) {
    await this.emailInput.type(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.type(password);
  }

  async enterConfirmPassword(password: string) {
    await this.passwordConfirmationInput.type(password);
  }

  async createAccountButtonClick() {
    await this.createAccountButton.click();
  }
}
