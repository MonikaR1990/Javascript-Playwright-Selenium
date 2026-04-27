import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test'
import { RegisterPage } from "../pages/RegisterPage.js";

let register

Given('user navigate to the register page', async function () 
{
    register = new RegisterPage(this.page);
    await register.navigate();
})
When('user selects gender', async function () {
    await register.selectGender();
})
When('user enters the registration details', async function(){
    await register.enterDetails();
})
When('user click the register button', async function () {
    await register.clickRegister();
})
Then('user should register successfully', async function () {
    const message = await register.getSuccessMsg();
    console.log(message);
    expect(message).toContain('Your registration completed');
})