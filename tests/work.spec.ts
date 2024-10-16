import { test, expect } from '@playwright/test';

test('searching', async ({ page }) => {
  await page.goto('https://www.work.ua/');
  await page.getByPlaceholder('Посада або компанія').click();
  await page.getByPlaceholder('Посада або компанія').fill('нова пошта');
  await page.getByRole('button', { name: ' Знайти вакансії' }).click();
});

test('category check', async ({ page }) => {
  await page.goto('https://www.work.ua/');
  await page.getByRole('link', { name: 'Вакансії за категоріями' }).click();
  await page.getByRole('link', { name: 'IT, комп\'ютери, інтернет' }).click();
  // await page.getByLabel(/^Повна/).check();
  await page.locator('input[value="74"][type="checkbox"]').check();
  await page.locator('#salaryfrom_selection').selectOption('4');
  await page.getByLabel('Кандидатам без досвіду').check();
});

// test('login/create job offer', async ({ page }) => {
//   await page.goto('https://www.work.ua/');
//   await page.getByRole('link', { name: 'Увійти' }).click();
//   await page.getByRole('link', { name: ' Увійти як роботодавець' }).click();
//   await page.getByPlaceholder('Ел. пошта').click();
//   await page.getByPlaceholder('Ел. пошта').fill('mrblaze136@gmail.com');
//   await page.getByPlaceholder('Ел. пошта').press('Tab');
//   await page.getByPlaceholder('Пароль').fill('12345678');
//   await page.getByRole('button', { name: 'Увійти' }).click();
//   await page.getByLabel('Створити вакансію').click();
// });


test('search for students', async ({ page }) => {
  await page.goto('https://www.work.ua/employer/');
  await page.getByRole('link', { name: /^Львів/ }).click();
  await page.getByText(/^Студент/).click();
  await page.getByLabel('IT, комп\'ютери, інтернет').check();
});

test('place resume', async ({ page }) => {
  await page.goto('https://www.work.ua/');
  await page.getByLabel('РозміститиРезюме').click();
  await page.getByLabel('Ваші ім\'я та прізвище').fill('Ігор Дмитров');
  await page.getByLabel('Посада, на якій ви хочете працювати').click();
  await page.getByLabel('Посада, на якій ви хочете працювати').fill('Junior ');
  await page.getByRole('button', { name: 'Junior', exact: true }).click();
  await page.getByPlaceholder('Місто').click();
  await page.getByPlaceholder('Місто').fill('Ль');
  await page.getByRole('button', { name: 'Львів' }).click();
  await page.getByRole('button', { name: 'Далі' }).click();
  await page.getByLabel('phone').click();
  await page.getByLabel('phone').fill('+380 11 111 11 111');
  await page.getByRole('button', { name: 'Далі' }).click();
});