import {expect, test} from '@playwright/test'

test('Fixtures', async({page})=>{
    await page.goto("https://www.google.com/");
});

//default fixtures
//browser (application)
//  |
//context (new session/profile)
//  |
//page (tab - Website open place)

test('Browser Fixture', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
});

test('Context Fixture', async({context})=>{
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
});

test("Page Fixture", async({page})=>{
    await page.goto("https://www.google.com/");
});


test('Multi User Login', async({browser})=>{
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://www.saucedemo.com/");
    await page1.locator('#user-name').fill("standard_user");
    await page1.locator('#password').fill("secret_sauce");
    await page1.locator('#login-button').click();
    await page1.waitForTimeout(5000);


    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://www.saucedemo.com/");
    await page2.locator('#user-name').fill("problem_user");
    await page2.locator('#password').fill("secret_sauce");
    await page2.locator('#login-button').click();
    await page1.waitForTimeout(5000);
})

//request ==> API
//testInfo ==> it is about the meta data of current test
//baseURL

test('Check Login Function', async({page}, testInfo)=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log(testInfo.title);

    if(testInfo.status === testInfo.expectedStatus)
    {
        await page.screenshot({path: testInfo.outputPath('failure.png')});
    }
});