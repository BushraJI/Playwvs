const { test, expect } = require('@playwright/test');

test("Dropdown", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Check number of options using Locator
    const optionsLocator = page.locator('#country option');
    await expect(optionsLocator).toHaveCount(10);

    // Check number of options using ElementHandles
    const optionsElements = await page.$$('#country option'); // returns array
    console.log("Number of options:", optionsElements.length);
    expect(optionsElements.length).toBe(10);

    // Print all option texts
    if (optionsElements.length === 0) {
        console.log('No options found!');
    } else {
        for (const el of optionsElements) {
            const text = await el.textContent();
            console.log(text.trim());
        }
    }

    // Optional: check presence of a specific value
    const optionTexts = await optionsLocator.allTextContents();
    if (optionTexts.includes('India')) {
        console.log('India is present in dropdown');
    }

    await page.waitForTimeout(5000);
});
