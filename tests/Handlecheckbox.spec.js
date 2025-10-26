const { test, expect } = require('@playwright/test');

test('Handlecheckbox', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Single checkbox
    const sundayCheckbox = page.locator("//input[@id='sunday']");
    await sundayCheckbox.check();

    // Validate checkboxes
    await expect(sundayCheckbox).toBeChecked();
    await expect(page.locator("//input[@id='tuesday']")).not.toBeChecked();

    // Multiple checkboxes
    const checkboxLocators = [
        "//input[@id='sunday']",
        "//input[@id='wednesday']",
        "//input[@id='monday']"
    ];
     
    for (const locator of checkboxLocators) {   //select multiple checkbox
        await page.locator(locator).check();
    }
    await page.waitForTimeout(5000)

    for (const locator of checkboxLocators){  // unselect multiple cehck box already selected 
        if(await page.locator(locator).isChecked()) {
        await page.locator(locator).uncheck();  
    }}

    await page.waitForTimeout(5000);
});

