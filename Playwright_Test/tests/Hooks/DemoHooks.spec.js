import {test, expect} from '@playwright/test'

let context;
let page;

//beforeAll - Browser Setup
test.beforeAll(async({browser})=>{
    context = await browser.newContext();
    page = await context.newPage();
});

//Navigate before each testcase
test.beforeEach(async()=>{
    await page.goto("https://demowebshop.tricentis.com/");
});

//Testcase 1
test('Valid Register', async()=>{
    page.locator('.ico-register').click();

    await page.locator('#gender-female').click();
    await page.locator('#FirstName').fill("Ramanitharan");
    await page.locator('#LastName').fill("Ramanitharan");
    await page.locator('#Email').fill("ramantharani1212@gmail.com");
    await page.locator('#Password').fill("Ramanitharan@123");
    await page.locator('#ConfirmPassword').fill("Ramanitharan@123");
    await page.locator('#register-button').click();

    await expect(page.locator('.result')).toContainText('Your registration completed');

    await page.locator('.ico-logout').click();
});

//TestCase 2:
test('Login Test', async()=>{
    await page.locator('.ico-login').click();
    
    await page.locator('#Email').fill("ruba1212@gmail.com");
    await page.locator('#Password').fill("Ruba@123");
    await page.locator('.button-1.login-button').click();

    await expect(page.locator('.ico-logout')).toBeVisible();

    await page.locator('.ico-logout').click();
});

//TestCase 3:
test('Invalid Login Test', async()=>{
    await page.locator('.ico-login').click();
    
    await page.locator('#Email').fill("wrong@gmail.com");
    await page.locator('#Password').fill("wrong@123");
    await page.locator('.button-1.login-button').click();

    await expect(page.locator('.validation-summary-errors')).toContainText('Login was unsuccessful');

});

//TestCase 4: 
test('Re-Rgister Already Registered User', async()=>{
    await page.locator('.ico-register').click();

    await page.locator('#gender-female').click();
    await page.locator('#FirstName').fill("Ruba");
    await page.locator('#LastName').fill("R");
    await page.locator('#Email').fill("ruba1212@gmail.com");
    await page.locator('#Password').fill("Ruba@123");
    await page.locator('#ConfirmPassword').fill("Ruba@123");
    await page.locator('#register-button').click();

    await expect(page.locator("//li[contains(text(),'already')]")).toContainText('already exists');
});

//Testcase 5
test('Empty Register', async()=>{
    await page.locator('.ico-register').click();

    await page.locator('#register-button').click();

    await expect(page.locator('[data-valmsg-for="FirstName"]')).toBeVisible();
    await expect(page.locator('[data-valmsg-for="LastName"]')).toBeVisible();
    await expect(page.locator('span[for="Email"]')).toContainText('required');
    await expect(page.locator('span[for="Password"]')).toContainText('required');
    await expect(page.locator('span[for="ConfirmPassword"]')).toContainText('required');

})

test.afterEach(async()=>{
    await page.screenshot({path:`result-${Date.now()}.png`})
})

test.afterAll(async()=>{
    await page.close();
    await context.close();
})





