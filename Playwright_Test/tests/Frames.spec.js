import {test} from '@playwright/test'

// test('Page.frame', async({page})=>{

//     await page.goto("https://practice-automation.com/iframes/");
    
//     const frame = page.frame({url: "https://playwright.dev/"});
   
//     await frame.getByText("Docs").click();

//     await frame.waitForTimeout(2000);

// });

// test('page.locator for iframe', async({page})=>{

//     await page.goto("https://practice-automation.com/iframes/");

//     const iframe = page.locator('#iframe-1');

//     const frame = iframe.contentFrame(); //iframe varible frame object

//     await frame.getByText("Docs").click();

// })

test('Frame Locator', async({page})=>{

    await page.goto("https://practice-automation.com/iframes/");

    const frame = page.frameLocator('#iframe-1');

    await frame.getByText("Docs").click();

});


//page.frame = name or url
//page.locator  (contentFrame) iframe locator into Frame Object
//page.frameLocator //Recommended

