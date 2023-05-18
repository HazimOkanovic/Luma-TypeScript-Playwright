import { Locator, Page, expect } from '@playwright/test'

const url = 'http://email'

export class EmailPage {
  readonly page: Page
  readonly activateAccountLink: Locator

  constructor(page: Page) {
    this.page = page
    this.activateAccountLink = this.page.locator("//img[contains(@alt, 'Verify Now')]")
  }

  async renderContent(content: string) {
    await this.page.route(url, route => {
      route.fulfill({ body: content })
    })
    await this.page.goto(url)
  }

  async successfullyVerifiedEmail() {
    const locator = this.page.locator("//h1//span[contains(text(), 'Create New')]");
    const expectedResult = "Create New User Account";
    
    await expect(this.page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/create/");
  }

  async clickVerifyEmailLink() {
    await this.activateAccountLink.click()
    await this.page.waitForLoadState()
  }
}