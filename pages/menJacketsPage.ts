import { Page, Locator } from "playwright-core";

export class MenJacketsPage {
  readonly page: Page
  readonly pageTitle: Locator
  readonly firstProduct: Locator
  readonly secondProduct: Locator
  readonly productPrice: Locator
  readonly quantityField: Locator
  readonly addToCartButton: Locator
  readonly sizeError: Locator
  readonly colorError: Locator
  readonly sizeL: Locator
  readonly blackColor: Locator

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('span', { hasText: 'Jackets' });
    this.firstProduct = page.locator('a', { hasText: 'Beamont' });
    this.secondProduct = page.locator('a', { hasText: 'Hyperion' });
    this.productPrice = page.locator('span', { hasText: '$' });
    this.quantityField = page.locator('#qty');
    this.addToCartButton = page.locator('button', { hasText: 'Cart' });
    this.sizeError = page.locator('#super_attribute[143]-error')
    this.colorError = page.locator('#super_attribute[93]-error');
    this.sizeL = page.locator('div', { hasText: 'L' });
    this.blackColor = page.locator("//div[@option-label = 'Black']");
  }

  async clickFirstProduct() {
    await this.firstProduct.click();
  }

  async clearQuantityField() {
    await this.quantityField.clear();
  }

  async enterQuantity(quantity: string) {
    await this.quantityField.type(quantity);
  }

  async clickAddToCartButton() {
    await this.addToCartButton.click();
  }

  async chooseSizeL() {
    await this.sizeL.click();
  }

  async chooseBlackColor() {
    await this.blackColor.click();
  }
}