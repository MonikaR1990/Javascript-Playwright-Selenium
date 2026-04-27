import {test, expect} from '@playwright/test'

test('Measure Amazon Page Load Time', async({page})=>{

    const startTime = Date.now();

    await page.goto('https://www.amazon.in');

    await page.waitForLoadState('load');

    const endTime = Date.now();

    console.log(`Page Load Time: ${endTime - startTime} ms`);

    const pageLoadTime = endTime - startTime;

    expect(pageLoadTime).toBeGreaterThan(2000)



});


//Playwright used to measure the following performance
//Page Load Time
//API response Timing
//Redendering Performance(reload)
//Network requesting time