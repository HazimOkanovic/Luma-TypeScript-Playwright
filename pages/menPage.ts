import { Page } from "playwright-core";

export default class MenPage{
    constructor(public page: Page){ }

    get pageTitle(){
        return this.page.locator("//span[@data-ui-id='page-title-wrapper']");
      }
}