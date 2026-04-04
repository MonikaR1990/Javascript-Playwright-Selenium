import {test} from '@playwright/test'

test('Takes Full Page Screenshot', async({page})=>{
    await page.goto("https://letcode.in");

    await page.screenshot({
        path: "E:\\LetCodeFullPage.png",
        fullPage: true
    })

});

test('Take Paricular Element', async({page})=>{
    await page.goto("https://letcode.in/button");
    const button = page.locator('#home');

    await button.screenshot({
        path: "E:\\newbutton.jpg"
    })

});

test('Screen shot with timestamp', async({page})=>
{
    await page.goto("https://letcode.in");

    const time = Date.now(); //1775123559276

    
    await page.screenshot({
        path:`screenshot/homepage.png`,
        fullPage: true
    })

});
