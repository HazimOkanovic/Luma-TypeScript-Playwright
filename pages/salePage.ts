import { Locator, Page } from "playwright-core";

export class SalePage{
    readonly page: Page
    readonly pageTitle: Locator
    readonly shopMenDeals: Locator
    readonly menSaleTitle: Locator

    constructor(page: Page){
        this.page = page;
        this.pageTitle = page.locator('span', { hasText: 'Sale' });
        this.shopMenDeals = page.locator("//a[@class='block-promo sale-mens']");
        this.menSaleTitle = page.locator('span', { hasText: 'Men' });
    }

    async clickShopMenDeals(){
        this.shopMenDeals.click();
    }
}