import { test, expect } from '@playwright/test'

test('Full Page Visual Comparision', async({page})=>{

     await page.goto('https://automationexercise.com/');

     await page.waitForLoadState('networkidle');

     await expect(page).toHaveScreenshot('FullPage.png', {
          maxDiffPixelRatio: 0.01
     });

})