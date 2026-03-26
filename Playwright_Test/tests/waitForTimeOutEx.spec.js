import {test} from '@playwright/test'

test('Wait For TimeOut', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");

    await page.getByText("Start").click();

    await page.waitForTimeout(2000); //sleep mode

    const msg = await page.locator('div#finish h4').textContent();

    console.log(msg);



});