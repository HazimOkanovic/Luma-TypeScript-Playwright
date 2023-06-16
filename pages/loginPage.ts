import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly pageTitle: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly signInButton: Locator
    readonly emailError: Locator
    readonly passwordError: Locator
    readonly createAccountButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('span', { hasText: 'Customer' });
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#pass');
        this.signInButton = page.locator('#send2');
        this.emailError = page.locator('#email-error');
        this.passwordError = page.locator('#pass-error');
        this.createAccountButton = page.locator('a', { hasText: 'Create an Account' });
    }

    async enterEmail(email: string) {
        await this.emailInput.type(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.type(password);
    }

    async clickSingInButton() {
        await this.signInButton.click();
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }
}