class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(path = '') {
      await this.page.goto(`${require('../config/config').baseUrl}${path}`);
    }
  }
  
  module.exports = BasePage;