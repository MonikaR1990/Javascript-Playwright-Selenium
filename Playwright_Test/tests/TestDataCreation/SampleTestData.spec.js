import {test} from '@playwright/test'

test('Sample Test Data Creation', async({page})=>{

    // console.log(Date.now());
    for(let i = 0; i<=10; i++)
    {

   const email = `user${Date.now()}@gmail.com`
   const password = `User${Math.floor(Math.random()*10000)}`

   await page.goto("https://automationexercise.com/login");
   await page.locator('[data-qa="login-email"]').fill(email)
   await page.locator('[data-qa="login-password"]').fill(password)

   await page.locator('[data-qa="login-button"]').click();

   console.log(email);
   console.log(password);

    }
   
})

//Math.random
    //0 to 1

    // 0.0001
    // 0.1001
    // 0.1990


    //0.4567 * 10000 = 4567.87
    //4587