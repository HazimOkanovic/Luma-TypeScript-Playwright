import { Locator, Page, expect } from '@playwright/test'

const url = 'http://email'

export class EmailPage {
  readonly page: Page
  readonly activateAccountLink: Locator

  constructor(page: Page) {
    this.page = page
    this.activateAccountLink = this.page.locator("//td//p[contains(text(), 'Welcome')]")
  }

  async renderContent(content: string) {
    await this.page.route(url, route => {
      route.fulfill({ body: content })
    })
    await this.page.goto(url)
  }

  async successfullyVerifiedEmail() {
    await expect(this.activateAccountLink).toHaveText("Welcome to Main Website Store.")
  }
}