const { test, expect } = require('@playwright/test');

test('handle radio button', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Radio button
    const radioBtn = page.locator("//label[normalize-space()='Male']");
    await radioBtn.check();
    await expect(radioBtn).toBeChecked(); // ✅ Use () to call the matcher

    // Alternatively:
    const isChecked = await radioBtn.isChecked(); // ✅ Must await this
    expect(isChecked).toBeTruthy(); // ✅ Proper usage
    await page.locator("//label[normalize-space()='Female']")

    // Fill data in input field
    //await page.locator("//input[@id='name']").fill("John");

    await page.waitForTimeout(5000); // Pausing code
});
