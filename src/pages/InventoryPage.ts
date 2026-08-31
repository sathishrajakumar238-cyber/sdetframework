import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private page: Page;
  private cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addItemToCart(productSlug: string) {
    await this.page.locator(`#add-to-cart-${productSlug}`).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}