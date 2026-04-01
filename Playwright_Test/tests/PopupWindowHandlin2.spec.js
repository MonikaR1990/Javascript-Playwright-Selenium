import { test } from  '@playwright/test'

test('Popup Handle', async({page})=>{

    await page.goto("https://letcode.in/window")

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#home').click()
    ]);

    await newPage.waitForTimeout(2000);

    await newPage.locator('text=Contact').click();

    await newPage.waitForTimeout(2000);

    await newPage.close();

    //await page.bringToFront();

    const title = await page.title();
    console.log(title);

   await page.getByText("Courses").click();

   await page.waitForTimeout(2000);
    
});

//parent window = page
//child window = newPage
//grandchild window = newPage2