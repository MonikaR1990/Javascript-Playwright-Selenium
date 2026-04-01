import {test} from '@playwright/test'

test('dialog box test', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.getByText("Click for JS Alert").click();

    await page.waitForTimeout(5000);

    page.on('dialog1', async dialog =>{
        dialog.accept();
    });

    await page.getByText("Click for JS Confirm").click();

    await page.waitForTimeout(5000);


    page.on('dialog2', async dialog => {
        dialog.dismiss();
        console.log(dialog.message());
    });

    await page.getByText("Click for JS Prompt").click()

    await page.waitForTimeout(5000);

    page.on('dialog3', async dialog =>{
        dialog.type();
        dialog.accept("Hello");
        

    });
    




})