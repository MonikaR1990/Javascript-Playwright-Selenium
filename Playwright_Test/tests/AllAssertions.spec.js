import {test, expect} from '@playwright/test'

const baseURL = "https://vinothqaacademy.com/demo-site-create-account/";
  

test('toHaveTitle', async({page})=>{
    
    await page.goto(baseURL);

    await expect(page).toHaveTitle('Demo Site – Create Account – Vinoth Tech Solutions');
});

test('toBeVisible', async({page})=>{
    await page.goto(baseURL);
    const heading = page.locator('h2');
    await expect(heading).toBeVisible();

    const fname = page.locator('#firstName');
    await expect(fname).toBeVisible();

    const logo = page.getByAltText("Vinoth Tech Solutions");
    await expect(logo).toBeVisible();
})


test('toHaveText', async({page})=>{
    await page.goto(baseURL);
    const heading = page.locator('h2');
    await expect(heading).toHaveText('Create Your Account');
    
    const fname = page.locator('text=First Name:');
    await expect(fname).toHaveText("First Name:");

})

test('toContainText', async({page})=>{

    await page.goto(baseURL);
    const text = page.locator('p');
    await expect(text).toContainText("securely");

});

test('toHaveURL', async({page})=>{
    await page.goto(baseURL);

    await expect(page).toHaveURL("https://vinothqaacademy.com/demo-site-create-account/");
});

test('toHaveValue', async({page})=>{
    await page.goto(baseURL);
    const firstname = page.locator('#firstName');
    await firstname.fill("Bala");
    await expect(firstname).toHaveValue("Bala");

    const lastname = page.locator('#lastName');
    lastname.fill("Ganesh");
    await expect(lastname).toHaveValue("Ganesh");

});

test('toBeEnabled', async({page})=>{
    await page.goto(baseURL);
    const regBtn = page.locator('#registerBtn');

    await expect(regBtn).toBeEnabled();
});

test('toBeDisabled', async({page})=>{
    await page.goto(baseURL);
    const regBtn = page.locator('#registerBtn');
    await expect(regBtn).not.toBeDisabled();
});

test('toContain', async({page})=>{
     await page.goto(baseURL);
     const fields = await page.locator("//label").allTextContents();
     console.log(fields);

     expect(fields).toContain('State:');
})

test('toHaveCount', async({page})=>{
    await page.goto(baseURL);
    const labels = page.locator("//label");
    console.log(labels);

    await expect(labels).toHaveCount(8);

    const inputFields = page.locator("//div[@class='field']//input");
    await expect(inputFields).toha(8);

});

test('toEqual', async({page})=>{
    await page.goto(baseURL);

    const regBtn = await page.locator('#registerBtn').textContent();

    expect(regBtn).toEqual("REGISTER");

    expect(baseURL).toEqual("https://vinothqaacademy.com/demo-site-create-account/");

})

test('toBeTruthy', async({page})=>{

    const isPresent = true;
    expect(isPresent).toBeTruthy();

});

test('toBeFalsy', async({page})=>{
    const isPresent = false;
    expect(isPresent).toBeFalsy();
})



