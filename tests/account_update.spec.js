const { test, expect } = require('@playwright/test');

test.describe('Account Update Flow', () => {
  test('should log in and successfully update region to APAC', async ({ page }) => {
    // Navigate to login
    await page.goto('/login');

    // Perform sign-in with test credentials
    await page.fill('#email', 'qa.user@mindbridge.local');
    await page.fill('#password', 'admin12345');
    await page.click('button[type="submit"]');

    // Wait for redirect to dashboard to prevent early navigation
    await page.waitForURL('**/dashboard');

    // Navigate to account settings
    await page.goto('/account');

    // Update Region to APAC
    await page.selectOption('[data-testid="account-region"]', 'APAC');

    // Save changes
    await page.click('[data-testid="account-save-btn"]');

    // Assert success notification is visible
    await expect(page.locator('[data-testid="account-save-success"]')).toBeVisible();
  });
});
