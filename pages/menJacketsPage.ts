import { Page } from "playwright-core";

export default class MenJacketsPage{
    constructor(public page: Page){ }

    async clickFirstProduct(){
      await this.firstProduct.click();
    }

    get pageTitle(){
        return this.page.locator("//span[@data-ui-id='page-title-wrapper']");
      }
    
    get sortByButton(){
      return this.page.locator("(//select[@id = 'sorter'])[1]");
    }  

    get firstProduct(){
      return this.page.locator("(//a[@class = 'product-item-link'])[1]");
    }

    get secondProduct(){
      return this.page.locator("(//a[@class = 'product-item-link'])[2]");
    }

    get productPrice(){
      return this.page.locator("(//span[@class = 'price'])[1]");
    }
}