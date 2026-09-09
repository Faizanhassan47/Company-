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

test('theme preference persists after reload', async ({ page }) => {
  await page.goto('/');
  const initialTheme = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', { name: /search systems/i }).click();
  await page.getByRole('button', { name: /toggle theme/i }).click();
  const nextTheme = initialTheme === 'dark' ? 'light' : 'dark';
  await expect(page.locator('html')).toHaveAttribute('data-theme', nextTheme);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', nextTheme);
});

test('page scroll progress exposes an accessible name', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('progressbar', { name: /page scroll progress/i })).toBeVisible();
});

test('project inquiry exposes accessible required fields', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByLabel(/your name/i).first()).toBeVisible();
  await expect(page.getByLabel(/email/i).first()).toHaveAttribute('type', 'email');
});
