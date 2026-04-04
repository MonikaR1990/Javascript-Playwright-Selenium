import {test, expect} from '@playwright/test'

test('Video Recorder',async({page})=>{
    await page.goto("https://letcode.in/");

    await page.waitForTimeout(3000);

    await page.locator('#testing').first().click();

    await page.waitForTimeout(2000);

    await page.goBack();

    //await page.goForward();

    await expect(page).toHaveTitle('Welcome');

})