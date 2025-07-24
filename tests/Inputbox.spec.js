const {test, expect}=require('@playwright/test')

test ('handle inputbox', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //inputbox first name 
    await expect(await page.locator("//input[@id='name']")).toBeVisible;
    await expect(await page.locator("//input[@id='name']")).toBeEmpty;
    await expect (await page.locator("//input[@id='name']")).toBeEditable;
    await expect(await page.locator("//input[@id='name']")).toBeEnabled;


    //fill data in input field
    await page.locator("//input[@id='name']").fill("John");
    await page.waitForTimeout(5000); //Pausing code 
    
})
