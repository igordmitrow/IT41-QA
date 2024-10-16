const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homePage');
const SearchResultsPage = require('../../pages/searchResultsPage');
const JobDetailsPage = require('../../pages/jobDetailsPage');

test('User can view job details', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const jobDetailsPage = new JobDetailsPage(page);

  await homePage.navigate();
  await homePage.search('Менеджер');
  await searchResultsPage.clickFirstJob();

  const jobTitle = await jobDetailsPage.getJobTitle();
  // const companyName = await jobDetailsPage.getCompanyName();

  expect(jobTitle).toBeTruthy();
  // expect(companyName).toBeTruthy();
});