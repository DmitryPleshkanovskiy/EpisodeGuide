import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Episode  Guide')
})

test('navigates to the show details page', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('a[href="/show/169"]')
  await page.click('a[href="/show/169"]')
  await page.waitForSelector('article[data-testid="show-details"]')
  await expect(page.locator('h2')).toHaveText('Breaking Bad')
})

test('navigates to the show details page and back', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('a[href="/show/169"]')
  await page.click('a[href="/show/169"]')
  await page.click('a[title="Back to main page"]')
  await expect(page.locator('form')).toBeTruthy()
})

test('navigates to the show details page directly', async ({ page }) => {
  await page.goto('/show/169')
  await page.waitForSelector('h2')
  await expect(page.locator('h2')).toHaveText('Breaking Bad')
})

test('search for a tv show', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('input[name="search"]')
  await page.fill('input[name="search"]', 'Breaking Bad')
  await page.waitForSelector('section[data-testid="search-results"]')
  await expect(page.locator('section[data-testid="search-results"]')).toBeTruthy()
  await expect(page.locator('h3').first()).toHaveText('Breaking Bad')
})

test('search for a tv show and clear results', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('input[name="search"]')
  await page.fill('input[name="search"]', 'Breaking Bad')
  await page.waitForSelector('section[data-testid="search-results"]')
  await expect(page.locator('h3').first()).toHaveText('Breaking Bad')
  await page.click('button[data-testid="clear-search-input"]')
  await expect(page.locator('input[name="search"]')).toHaveText('')
  await expect(page.locator('button[data-testid="clear-search-input"]')).toBeHidden()
  await expect(page.locator('h2').first()).toHaveText('Drama')
})
