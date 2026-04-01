import { test } from '@playwright/test'

test('New Popup', async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/windows");

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), //listener 
        page.getByText("Click Here").click() //click
    ]);

    
    // await page.getByText("Click Here").click(); //Already
    // await page.waitForEvent('popup');  //Wait
   

    await newPage.waitForTimeout(3000);

    const title = await newPage.title();

    console.log(title);

});
