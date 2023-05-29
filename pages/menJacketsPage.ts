import { Page } from "playwright-core";

export default class MenJacketsPage{
    constructor(public page: Page){ }

    async clickFirstProduct(){
      await this.firstProduct.click();
    }

    async clearQuantityField(){
      await this.quantityField.clear();
    }

    async enterQuantity(quantity: string){
      await this.quantityField.type(quantity);
    }

    async clickAddToCartButton(){
      await this.addToCartButton.click();
    }

    async chooseSizeL(){
      await this.sizeL.click();
    }

    async chooseBlackColor(){
      await this.blackColor.click();
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

    get quantityField(){
      return this.page.locator("//input[@name = 'qty']");
    }

    get addToCartButton(){
      return this.page.locator("//button[@title = 'Add to Cart']");
    }

    get sizeError(){
      return this.page.locator("//div[@id = 'super_attribute[143]-error']");
    }

    get colorError(){
      return this.page.locator("//div[@id = 'super_attribute[93]-error']");
    }

    get sizeL(){
      return this.page.locator("//div[@option-label = 'L']");
    }

    get blackColor(){
      return this.page.locator("//div[@option-label = 'Black']");
    }
}