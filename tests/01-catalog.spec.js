import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Задание 1', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.goto()
  await expect(page.getByRole('heading', {name: 'Apple'})).toBeVisible()
  await model.search('Red Lipstick');

  await expect(page.getByRole('heading', {name: 'Red Lipstick'})).toBeVisible()
  await expect(page.getByRole('heading', {name: 'Apple'})).toHaveCount(0)
  // END
});

test('Задание 2', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.goto()
  await expect(page.getByRole('heading', {name: 'Apple'})).toBeVisible()

  await model.selectBrand('Essence');
  await expect(page.getByRole('checkbox',{name: 'Essence', exact: true})).toBeChecked()
  await expect(
    page.getByRole('heading', {name: 'Essence Mascara Lash Princess'})).toBeVisible()

  await expect(page.getByRole('heading', {name: 'Apple'})).toHaveCount(0)
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.goto()
  await model.openProduct('Red Lipstick');

  await expect(page).toHaveURL(/\/products\/4$/);
  await expect(page.getByRole('heading', { name: 'Red Lipstick' })).toBeVisible()
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.goto()
  const essenceCard = page.getByRole('heading', {
  name: 'Essence Mascara Lash Princess',
});

  await expect(essenceCard).toBeVisible()
  await model.nextPage();
  await expect(essenceCard).toHaveCount(0)

  await expect(page.getByRole('heading').first()).toBeVisible()
  // END
});
