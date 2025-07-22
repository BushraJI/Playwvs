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
// const newsletterCheckbox=await page.locator('#Newletter')
 //await expect(newsletterCheckbox).toBeChecked()
 

});

// const regbutton = await page.locator('#register-button')
// 32 |  await expect (regbutton).toHaveAttribute('type','submit')
//    |                           ^
// 33 | // to have text to contain value  exact text   element match text //full text 
// 9msExpect "toHaveText"— Assertion.spec.js:35
// 34 |
// 35 | await expect (await page.locator('.page-title h1')).toHaveText('Register')
//    |                                                     ^
// 36 | //to contain text partial text element contain text //partial text 
// 7msExpect "toContainText"— Assertion.spec.js:38
// 37 |
// 38 | await expect(await page.locator('.page-title h1')).toContainText('Reg')
//    |                                                    ^
// 39 |
// 19msFill "test@demo.com" locator('#Email')— Assertion.spec.js:43
// 42 | const emailInput =await page.locator('#Email')
// 43 | await emailInput.fill('test@demo.com')
//    |                  ^
// 44 | await expect(emailInput).toHaveValue('test@demo.com')
// 7msExpect "toHaveValue"— Assertion.spec.js:44
// 43 | await emailInput.fill('test@demo.com')
// 44 | await expect(emailInput).toHaveValue('test@demo.com')
//    |                          ^
// 45 |
// 5.0sExpect "toHaveCount"— Assertion.spec.js:48
// 47 | const options =await page.locator('select[name="DateofBirthMonth"] option')
// 48 | await expect (options).toHaveCount(13)
//    |                        ^