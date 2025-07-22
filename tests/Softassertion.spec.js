const {test , expect} =require ('@playwright/test')
test ("Softassertions" , async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})