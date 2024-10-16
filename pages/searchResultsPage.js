const BasePage = require('./basePage');

class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.jobTitles = '.job-link';
  }

  async getFirstJobTitle() {
    const titles = await this.page.$$(this.jobTitles);
    if (titles.length > 0) {
      return titles[0].innerText();
    }
    return null;
  }

  async clickFirstJob() {
    const titles = await this.page.$$(this.jobTitles);
    if (titles.length > 0) {
      await titles[0].click();
    }
  }
}

module.exports = SearchResultsPage;