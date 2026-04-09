import {test as base, expect} from '@playwright/test'


export const test = base.extend({
    loginPage: async({page}, use)=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    await use(page);
    
    },

    invalidPage: async({page}, use)=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill("testq");
    await page.locator('#password').fill("12345");
    await page.locator('#login-button').click();
    await use(page);
    }



    
})

export{expect};


