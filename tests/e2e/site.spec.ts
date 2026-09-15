import { expect, test } from '@playwright/test';

const publicPages = ['/', '/about', '/services', '/work', '/industries', '/insights', '/contact', '/privacy', '/terms'];

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('tekmora_cookie_consent', 'denied'));
});

for (const path of publicPages) {
  test(`${path} renders its main content`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('main#main-content')).toBeVisible();
    await expect(page.locator('h1').first()).toBeVisible();
  });
}

test('unknown routes render the recovery page', async ({ page }) => {
  await page.goto('/this-page-does-not-exist');
  await expect(page.locator('main#main-content')).toBeVisible();
  await expect(page.getByText(/not found|404/i).first()).toBeVisible();
});

test('site uses the permanent black theme', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', /./);
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(9, 9, 9)');
});

test('page scroll progress exposes an accessible name', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[role="progressbar"]')).toHaveAccessibleName('Page scroll progress');
});

test('project inquiry exposes accessible required fields', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByLabel(/your name/i).first()).toBeVisible();
  await expect(page.getByLabel(/email/i).first()).toHaveAttribute('type', 'email');
});
