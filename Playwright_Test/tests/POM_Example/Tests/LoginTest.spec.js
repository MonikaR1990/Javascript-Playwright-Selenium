import {test, expect} from '@playwright/test'
import { HomePage } from '../Pages/HomePage'
import { LoginPage } from '../Pages/LoginPage'

let home; 
let login; 


test.beforeEach(async({page})=>{
    home = new HomePage(page);
    login = new LoginPage(page);

    await home.gotoHomePage();
    await home.clicksignupLoginBtn();
});

test('Valid Login', async({page})=>{
    await login.login("testingnew@gmail.com", "testingnew");
    await expect(login.loggedInUser).toBeVisible();
})

test('Invalid Login', async({page})=>{
    await login.login("wrong@gmail.com", "wrong123");
    await expect(login.errorMsg).toBeVisible();
})



