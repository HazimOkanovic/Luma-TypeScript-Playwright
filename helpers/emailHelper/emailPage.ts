import { Page, expect } from '@playwright/test'

export class EmailPage {
  
  constructor(public page: Page) { }

  async verifyReceivedEmail(name: string){
    await this.page.goto("https://inboxkitten.com/inbox/" + name);
  
    await expect(this.page.locator("//div[@class='row-subject']")).toHaveText("Welcome to Main Website Store")
  
    await this.page.close();
  }
}