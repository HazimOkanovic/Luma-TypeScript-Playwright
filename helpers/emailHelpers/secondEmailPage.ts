import { Page, expect } from '@playwright/test'

export class SecondEmailPage {
  
  constructor(public page: Page) { }

  async verifyReceivedEmail(value: {name: string}){
    await this.page.goto("https://inboxkitten.com/inbox/" + value.name);
  
    await expect(this.page.locator("//div[@class='row-subject']")).toHaveText("Welcome to Main Website Store")
  
    await this.page.close();
  }
}