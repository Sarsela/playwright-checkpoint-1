export class CatalogPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://products-store.hexlet.app/');
  }

  async search(query) {
    // BEGIN
    const searchInput = this.page.getByRole('searchbox').or(this.page.getByPlaceholder(/search/i)
  )
  await searchInput.fill(query)
    // END
  }

  async selectBrand(brand) {
    // BEGIN
    await this.page.getByRole('checkbox', { name: brand, exact: true }).check();
    // END
  }



  async openProduct(name) {
    // BEGIN
    await this.page
      .getByRole('link',{ name }).first().click()
    // END
  }

  async nextPage() {
    // BEGIN
    await this.page.getByRole('link', { name: 'Next' }).first().click()
    // END
  }
}

