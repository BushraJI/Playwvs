import {test, expect } from '@playwright/test';
import path from 'path';

test('page screenshot',async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests\Screenshot/'+Date.now()+'Homepage.png'})
});

test('Full page screenshot',async ({ page })=>  {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.screenshot({path:'tests\Screenshot/'+Date.now()+'Homepage.png' ,fullPage:true})
});

test('Element page screenshot',async ({ page })=>{
   await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//h2[normalize-space()='Dynamic Button']").screenshot({path:'tests\Screenshot/'+Date.now()+'Homepage.png' })
});
