const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = '#search';
    this.searchButton = '#sm-but';
  }

  async search(keyword) {
    await this.page.fill(this.searchInput, keyword);
    await this.page.click(this.searchButton);
  }
}

module.exports = HomePage;