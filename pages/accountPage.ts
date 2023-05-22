import { Page } from "@playwright/test";

export default class AccountPage {
    constructor(public page: Page){ }

    get accountTitle() {
        return this.page.locator("//span[@data-ui-id = 'page-title-wrapper']");
    }
}