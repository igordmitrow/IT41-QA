const BasePage = require('./basePage');

class JobDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.jobTitle = 'h1';
    this.companyName = '.glyphicon-company ~ *';
  }

  async getJobTitle() {
    return this.page.innerText(this.jobTitle);
  }

  async getCompanyName() {
    return this.page.innerText(this.companyName);
  }
}

module.exports = JobDetailsPage;