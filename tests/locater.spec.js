import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto ("https://demoblaze.com/index.html")
    //click on login button 
    await page.click('id=login2')

    //provide username - css
    //await page.locator('#loginusername').fill("BJIK")
    await page.fill('#loginusername','BJIK')
    //await page.type('#loginusername')

    //provide password  -css
    await page.fill("input[id='loginpassword']",'test@123')  

    //click on login button x path

    await page.click("//div[@id='logInModal']/div/div/div[3]/button[2]");

    //Verify logout link presence  xpath

    const logoutlink = await page.locator('//*[@id="logout2"]');

    //assertion
     await expect(logoutlink).toBeVisible();

     await page.close()

})