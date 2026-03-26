//waitForLoadState

//page achieve specific loading state

//AJAX, SPA apps

//Available States
//1. load
//2. documentloaded
//3. networkidel

//1. load
//wait until full page load completes
//including css, imgaes, animation, etc, 

//2. documentloaded
//DOM is ready (HTML Parsed)
//imgaes/css may still load

//3. networkidel
//waits untill no network request for 500ms 

import {test} from '@playwright/test'

test('Wait For load', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

    await page.getByText("Start").click();

    await page.waitForLoadState('load');

    const msg = await page.locator('div#finish h4').textContent();

    console.log(msg);

});

test('Wait For documentloaded', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

    await page.getByText("Start").click();

    await page.waitForLoadState('domcontentloaded');

    const msg = await page.locator('div#finish h4').textContent();

    console.log(msg);

});

test('Wait For networkidel', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator('button[class*="login"]').click();

    await page.waitForLoadState('networkidle');

    

    
});