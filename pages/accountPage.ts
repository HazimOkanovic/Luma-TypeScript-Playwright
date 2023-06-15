import { Page, Locator } from "@playwright/test";

export class AccountPage {
    readonly page: Page
    readonly accountTitle: Locator

    constructor(page: Page){ 
        this.page = page;
        this.accountTitle = page.locator('span', {hasText: 'Account'});
    }
}