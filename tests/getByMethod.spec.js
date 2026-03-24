import {test} from '@playwright/test'

('getByMethods', async({page})=>
{
    await page.goto("https://www.amazon.in/");

    await page.getByRole('searchbox',{name: 'Search Amazon.in'}).fill("Laptop");

    await page.getByRole('button', {name: 'Go', exact:true}).click();

    await page.goto("https://www.facebook.com/");

    await page.getByRole('link', {name: 'Create new account'}).click();

    await page.getByRole('img', {name: 'Meta logo'}).screenshot({path:'metalogo.png'});

    const text = await page.getByText('Get started on Facebook').textContent();

    console.log(text);

    const msg = await page.getByText('Create an account to connect with friends, family and communities of people who share your interests.').textContent();

    console.log(msg);

    await page.getByText('First name').fill("Bala");

    await page.getByText('Surname').fill("G");

    //await page.locator('text=Surname').fill("G");

    //await page.locator("//input[text()='Surname']").fill("G");


    await page.goto("https://vinothqaacademy.com/demo-site/");

    await page.getByLabel('First Name  ').fill("Mani");

    await page.getByLabel('Last Name  ').fill("G");

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.locator('[placeholder="Password"]').fill("secret_sauce");

    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");

    await page.goto("https://www.passthenote.com/auth/login");

    await page.getByTestId('ptn-login-email-input').fill("monika");
    await page.getByTestId('ptn-login-password-input').fill("R");
    await page.getByTestId('ptn-login-submit-button').click();

    await page.waitForTimeout(2000);
});

//getBy (bilt-in locators in Playwright used fins and locate the elements)

//1. getByRole
//2. getByText
//3. getByLabel
//4. getByPlaceholder
//5. getByTestID
//6. getAltText

//1. getByRole
//button
//textbox
//serchBox
//link
//radio
//checkBox
//heading
//cobboBox
//list
//dialog
//table

test