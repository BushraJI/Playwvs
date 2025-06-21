//import { expect } from "@playwright/test"

const {test , expect} = require('@playwright/test');

test('Locatingmultipleelemenets', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")

    // const links = await page.$$('a');

    // ///print 
    // for(const link of links)
    // {
    //   const linktext=await link.textContent();
    //   console.log(linktext);
    // }

    const  products=await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of products)
    {
    const productName= await product.textContent();
    console.log(productName)
    }
})