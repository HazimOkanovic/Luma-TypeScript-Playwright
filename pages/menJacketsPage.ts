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
    this.pageTitle = page.locator('#ui-id-11');
    this.firstProduct = page.locator('a', { hasText: 'Beaumont Summit Kit' });
    this.secondProduct = page.locator('a', { hasText: 'Hyperion' });
    this.productPrice = page.getByText('$42.00');
    this.quantityField = page.locator('#qty');
    this.addToCartButton = page.locator('button', { hasText: 'Cart' });
    this.sizeError = page.locator("//div[@id = 'super_attribute[143]-error']")
    this.colorError = page.locator("//div[@id = 'super_attribute[93]-error']");
    this.sizeL = page.locator("//div[@aria-label = 'L']");
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