const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homePage');
const SearchResultsPage = require('../../pages/searchResultsPage');

test('User can search for jobs', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  await homePage.navigate();
  await homePage.search('Програміст');

  const firstJobTitle = await searchResultsPage.getFirstJobTitle();
  expect(firstJobTitle).toBeTruthy();
  expect(firstJobTitle.toLowerCase()).toContain('програміст');
});