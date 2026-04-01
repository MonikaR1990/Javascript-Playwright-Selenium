import {test} from '@playwright/test'

test('dialog box test', async({page})=>{
   
    await page.goto("https://letcode.in/alert");

    page.once('dialog', async dialog =>
    {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('#accept').click();
    await page.waitForTimeout(5000);
    
    page.once('dialog', async dialog =>{
         console.log(dialog.message());
         await dialog.dismiss()
    });   

    await page.locator('#confirm').click();
    await page.waitForTimeout(5000);

    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept("Hello");
    })


    await page.locator('#prompt').click();
    await page.waitForTimeout(5000);


})