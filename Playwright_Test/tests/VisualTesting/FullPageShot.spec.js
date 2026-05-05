import { test } from '@playwright/test'

test('Full Page Screenshot', async({page})=>{
    await page.goto("https://automationexercise.com/");

    await page.screenshot({path:'FullPage.png', fullPage: true})
})