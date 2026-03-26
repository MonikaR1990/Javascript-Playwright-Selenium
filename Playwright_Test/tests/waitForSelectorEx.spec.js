import {test} from '@playwright/test'

test('Wait For Selector', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

    await page.getByText("Start").click();

    await page.waitForSelector('div#finish h4');

    const msg = await page.locator('div#finish h4').textContent();

    console.log(msg);



});