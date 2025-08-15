const {test ,expect}=require('@playwright/test')

test('handle Radiobutton', async({page})=> {

    await page.goto ('https://testautomationpractice.blogspot.com/')

    //checkbox practice 

    await  page.locator ("//input[@id='male']").check();
    //Radio button assertions   Positive test case to check radio button 
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    //await expect(await page.locator("//input[@id='male']")).isChecked().ToBeTruthy();
    expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();


    //negative test case for female radio button is not checked 
   // Negative assertion for female radio button
   expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);  //pasuing Code

})
