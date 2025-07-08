const { test, expect } = require('@playwright/test');

test('AssertionTest', async ({ page }) => {
  // Open app URL
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

  // Assertion for validation if the proper URL is present or not
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
  
  //2nd assertion is  page has title 

 await expect(page).toHaveTitle('nopCommerce demo store. Register')

 //3rd Locator validaty ( Element Visible )

 const logoElement= await page.locator('.header-logo')
 await expect(logoElement).toBeVisible()
 //4 expect loctor toBeEnable
 const SearchBox=await page.locator('#small-searchterms')
  await expect (SearchBox).toBeEnabled()

// 5 chcek wether radio buton is check or  not 
 const maleRadioButton=await page.locator('#gender-male')
 await maleRadioButton.click()//select radio button 
 await expect(maleRadioButton).toBeChecked()

 //check box
 const newsletterCheckbox=await page.locator('#Newletter')
 await expect(newsletterCheckbox).toBeChecked()
 

});

