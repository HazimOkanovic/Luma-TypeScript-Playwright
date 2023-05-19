import { Page, expect } from '@playwright/test'
import { Constants } from '../../constants';

export class EmailPage {
  
  constructor(public page: Page) { }

  async verifyReceivedEmail(name: string){
    await this.page.goto("https://inboxkitten.com/inbox/" + name);
  
    await expect(this.emailTitle).toHaveText(Constants.emailTitle)
  
    await this.page.close();
  }

  get emailTitle(){
    return this.page.locator("//div[@class='row-subject']");
  }
}