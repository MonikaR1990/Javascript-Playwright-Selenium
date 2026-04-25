import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

let login;

Given('user navigate to the login page', async function () {
    login = new LoginPage(this.page);  
    await login.navigate();
});

Given('user enters username and password', async function () {
    await login.enterLoginDetails('srees123@gmail.com', 'srees@123');
});

Given('user enters invalid username and password', async function(){
    await login.enterLoginDetails('wrong@gmail.com', 'wrong123');
})

Given('user enters username {string} and password {string}', async function (username, password) {
    this.username = username;
    this.password = password;
    await login.enterLoginDetails(username, password)
})

When('user click the Login button', async function () {
    await login.clickLogin();
});

Then('user should be navigate to the user home page', async function () {
    const actualEmail = await login.verifyLogin();
    console.log(actualEmail);

    expect(actualEmail).toContain('srees123@gmail.com');
});

Then('user should see the login error', async function() {
      const isVisible = await login.isErrorMsgVisible();

      expect(isVisible).toBeTruthy();
})

Then('user should see {string}', async function(result){
    if(result === 'success')
    {
        const actualEmail = await login.verifyLogin();
        expect(actualEmail).toContain(this.username);
    }
    else
    {   
        const isVisible = await login.isErrorMsgVisible();
        expect(isVisible).toBeTruthy();
    }
    
})