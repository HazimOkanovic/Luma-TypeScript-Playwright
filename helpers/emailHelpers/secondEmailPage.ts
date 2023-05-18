import { Page, expect } from '@playwright/test'

export class SecondEmailPage {
  
  constructor(public page: Page) { }

  async enterUserName(value: {name: string}) {
    await this.userNameInput.type(value.name);
  }

  async clickInboxButton() {
    await this.inboxButton.click();
  }


  get userNameInput(){
    return this.page.locator("//input[@id='popupusername']");
  } 

  get inboxButton(){
    return this.page.locator("//button[@class='swal2-confirm swal2-styled']");
  } 
}