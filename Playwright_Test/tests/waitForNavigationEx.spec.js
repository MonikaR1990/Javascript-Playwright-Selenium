import {test, expect} from '@playwright/test'

test('Wait without Navigation', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");
    await page.locator('button.radius').click(); //30

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
});

test('Wait For Navigation', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");
    
    await Promise.all([
        await page.waitForNavigation(),
        await page.locator('button.radius').click()
    ]);



    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
});




