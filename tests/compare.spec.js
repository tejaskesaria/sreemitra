import { test } from '@playwright/test';
import path from 'path';

test('capture screenshots', async ({ page }) => {
  // Capture Astro site
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321/');
  await page.waitForTimeout(2000); // Wait for fonts and animations
  await page.screenshot({ path: 'astro-home.png', fullPage: true });

  // Capture original HTML site
  const originalPath = path.resolve('../index.html');
  await page.goto(`file://${originalPath}`);
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'original-home.png', fullPage: true });
});