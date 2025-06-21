const {test , expect} =require('@playwright/test')

test('Builtin-locators',async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //page.getByAltText() to locate an element, usually image, by its text alternative
    const logo=await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    //page.getByPlaceholder() to locate an input by placeholder.

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")

   // page.getByRole() to locate by explicit and implicit accessibility attributes. for button and link

    await page.getByRole('button',{type: 'submit'}).click()


  //page.getByText() to locate by text content.  by using text content we can locate element 
    //const name= await page.locator('//img[@class="oxd-userdropdown-img"]').textContent()
    await expect(await page.getByText('Bogdan Dyuk')).toBeVisible()

})
//span[@class='oxd-userdropdown-tab']