import { expect, test } from '@playwright/test';

const publicPages = ['/', '/about', '/services', '/work', '/industries', '/insights', '/contact', '/privacy', '/terms'];
const seoPages = [
  '/',
  '/about',
  '/services',
  '/services/custom-software-development',
  '/work/dome-enterprise',
  '/industries/manufacturing',
  '/insights/how-sap-business-one-integrations-connect-operational-applications',
  '/contact'
];

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

test('homepage plays the opening animation after prerender hydration', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'no-preference' });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.getByRole('dialog', { name: /software engineering introduction/i })).toBeVisible();
  await expect(page.locator('.site-wrapper')).toHaveAttribute('aria-hidden', 'true');
  await expect(page.locator('.site-wrapper')).toHaveAttribute('inert', '');
  await expect(page.getByRole('button', { name: 'Skip Intro' })).toBeFocused();
  await page.getByRole('button', { name: 'Skip Intro' }).click({ force: true });
  await expect(page.locator('.site-wrapper')).toBeVisible();
  await expect(page.locator('.site-wrapper')).not.toHaveAttribute('aria-hidden', 'true');
  await expect(page.locator('.site-wrapper')).not.toHaveAttribute('inert', '');
  await expect(page.locator('.skip-link')).toBeFocused();
  await context.close();
});

test('homepage minimizes the opening sequence for reduced motion', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('dialog', { name: /software engineering introduction/i })).toBeHidden();
  await expect(page.locator('.site-wrapper')).not.toHaveAttribute('aria-hidden', 'true');
  await expect(page.locator('.site-wrapper')).not.toHaveAttribute('inert', '');
});

test('homepage dashboard preview does not overflow a phone viewport', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto('/');
  await expect(page.locator('.product-window-frame')).toBeVisible();

  const layout = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    previewRight: document.querySelector('.product-window-frame')?.getBoundingClientRect().right ?? 0
  }));

  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);
  expect(layout.previewRight).toBeLessThanOrEqual(layout.viewportWidth);
});

test('page scroll progress exposes an accessible name', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('[role="progressbar"]')).toHaveAccessibleName('Page scroll progress');
});

test('project inquiry exposes accessible required fields', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByLabel(/full name|your name/i).first()).toBeVisible();
  await expect(page.getByLabel(/work email|email/i).first()).toHaveAttribute('type', 'email');
});

test('contact submission records one conversion only after API success', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('tekmora_cookie_consent', 'granted'));
  await page.route('https://www.googletagmanager.com/gtm.js**', route =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
  );
  let requests = 0;
  await page.route('**/api/contact', async route => {
    requests += 1;
    await new Promise(resolve => setTimeout(resolve, 100));
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' });
  });
  await page.goto('/contact');
  await page.getByLabel('Full name').fill('Test User');
  await page.getByLabel('Work email').fill('test@example.com');
  await page.getByLabel('Tell us about your project').fill('Mocked browser validation only.');
  const submit = page.getByRole('button', { name: /Discuss Your Project/i });
  await submit.dblclick();
  await expect(page.getByRole('status')).toBeVisible();
  expect(requests).toBe(1);
  const events = await page.evaluate(() => window.dataLayer?.filter(item => item.event === 'contact_form_submit') ?? []);
  expect(events).toHaveLength(1);
  expect(events[0]).not.toHaveProperty('email');
  expect(events[0]).not.toHaveProperty('name');
});

test('failed contact submission has an error and no conversion event', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('tekmora_cookie_consent', 'granted'));
  await page.route('https://www.googletagmanager.com/gtm.js**', route =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
  );
  await page.route('**/api/contact', route =>
    route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"unavailable"}' })
  );
  await page.goto('/contact');
  await page.getByLabel('Full name').fill('Test User');
  await page.getByLabel('Work email').fill('test@example.com');
  await page.getByLabel('Tell us about your project').fill('Mocked failure validation only.');
  await page.getByRole('button', { name: /Discuss Your Project/i }).click();
  await expect(page.getByRole('alert')).toContainText(/temporarily unavailable/i);
  const events = await page.evaluate(() => window.dataLayer?.filter(item => item.event === 'contact_form_submit') ?? []);
  expect(events).toHaveLength(0);
});

test('analytics prevents duplicate scripts and stops events after consent withdrawal', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('tekmora_cookie_consent', 'granted'));
  await page.route('https://www.googletagmanager.com/gtm.js**', route =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
  );
  await page.goto('/services');
  await expect(page.locator('script[data-tekmora-analytics]')).toHaveCount(1);
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href="/contact"]'))
      .find(candidate => candidate.offsetParent !== null);
    link?.click();
  });
  await page.waitForURL('**/contact');
  await expect.poll(() => page.evaluate(() => window.dataLayer
    .filter(item => item.event === 'page_view')
    .map(item => item.page_path)))
    .toEqual(['/services', '/contact']);
  await page.evaluate(() => localStorage.setItem('tekmora_cookie_consent', 'denied'));
  await page.evaluate(() => {
    const link = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href="/services"]'))
      .find(candidate => candidate.offsetParent !== null);
    link?.click();
  });
  await page.waitForURL('**/services');
  await expect(page.locator('script[data-tekmora-analytics]')).toHaveCount(1);
  expect(await page.evaluate(() => window.dataLayer.filter(item => item.event === 'page_view').map(item => item.page_path)))
    .toEqual(['/services', '/contact']);
});

test('public pages expose complete SEO metadata', async ({ page }) => {
  const seenTitles = new Set<string>();

  for (const path of seoPages) {
    await page.goto(path);
    await expect(page.locator('main#main-content')).toBeVisible();
    const expectedCanonical = `https://www.tekmorasolution.com${path === '/' ? '/' : path}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', expectedCanonical);

    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    const h1Count = await page.locator('main#main-content h1').count();
    const schemaCount = await page.locator('script[type="application/ld+json"]').count();

    expect(title.length, `${path} should have a title`).toBeGreaterThan(10);
    expect(seenTitles.has(title), `${path} has a duplicate title`).toBe(false);
    seenTitles.add(title);
    expect(description?.length, `${path} should have a description`).toBeGreaterThan(50);
    expect(canonical, `${path} should have a canonical URL`).toBe(expectedCanonical);
    expect(h1Count, `${path} should have exactly one main heading`).toBe(1);
    expect(schemaCount, `${path} should expose structured data`).toBeGreaterThan(0);
  }
});

for (const path of ['/', '/services', '/services/custom-software-development', '/work', '/contact']) {
  test(`${path} matches the representative visual baseline`, async ({ page }) => {
    await page.goto(path);
    const openingDialog = page.getByRole('dialog', { name: /software engineering introduction/i });
    if (await openingDialog.isVisible()) {
      await page.getByRole('button', { name: 'Skip Intro' }).click({ force: true });
      await expect(openingDialog).toBeHidden();
      await page.mouse.move(0, page.viewportSize()?.height ?? 0);
    }
    await expect(page.locator('main#main-content')).toBeVisible();
    await expect(page.locator('.site-wrapper')).toBeVisible();
    await page.addStyleTag({
      content: '.preloader-overlay { display: none !important; } *, *::before, *::after { animation: none !important; transition: none !important; }'
    });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([
        document.fonts.load('400 16px Poppins'),
        document.fonts.load('600 16px Poppins'),
        document.fonts.load('700 16px Poppins')
      ]);
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
      document.documentElement.style.scrollBehavior = 'auto';
      document.body.style.scrollBehavior = 'auto';
      window.scrollTo({ left: 0, top: 0, behavior: 'auto' });
      window.dispatchEvent(new Event('scroll'));
      await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    });
    const name = path === '/' ? 'home' : path.replace(/^\//, '').replaceAll('/', '-');
    await expect(page).toHaveScreenshot(`${name}.png`, {
      animations: 'disabled',
      caret: 'hide',
      fullPage: false
    });
  });
}
