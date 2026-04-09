import {test} from '../tests/CustomFixture2.spec'
import { expect } from '@playwright/test';

test('Login Test1', async({screenshotonFailure})=>{
    
    await screenshotonFailure.goto("https://www.saucedemo.com/");
    await screenshotonFailure.locator('#user-name').fill("testq");
    await screenshotonFailure.locator('#password').fill("12345");
    await screenshotonFailure.locator('#login-button').click();
    

    await expect(screenshotonFailure).toHaveURL("https://www.saucedemo.com/inventory.html");

});