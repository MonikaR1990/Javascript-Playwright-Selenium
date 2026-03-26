//wait

//UI Load
//API Response
//animation
//async actions

//Playwright has default auto wait

import {test} from '@playwright/test'

test('Auto Wait', async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");
    await page.locator('.radius').click();

})

//Explicit waits in Playwright
//1. waitForSelector()
//2. waitForTimeOut()
//3. waitForLoadState()
//4. waitForNavigation()
//5. waitForURL()
//6. waitForResponse()
//7. waitForRequest()
