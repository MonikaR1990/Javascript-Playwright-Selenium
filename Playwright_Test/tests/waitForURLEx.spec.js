import {test, expect} from '@playwright/test'

test('Wait For URL', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");
    

    await Promise.all([
     page.waitForURL('**/secure'),
     page.locator('button.radius').click()

    ]);

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure'); //Testing
});