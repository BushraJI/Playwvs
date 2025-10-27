import { test, expect } from '@playwright/test';
import path from 'path';

test('page screenshot', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.screenshot({ path: `tests/Screenshot/${Date.now()}_Homepage.png` });
});

test('Full page screenshot', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.screenshot({
    path: `tests/Screenshot/${Date.now()}_FullPage.png`,
    fullPage: true
  });
});

test('Element page screenshot', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const element = page.locator("//h2[normalize-space()='Dynamic Button']");
  await element.screenshot({ path: `tests/Screenshot/${Date.now()}_Element.png` });
});
