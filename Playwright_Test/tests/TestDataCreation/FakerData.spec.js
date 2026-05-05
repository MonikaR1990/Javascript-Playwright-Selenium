import { test } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('Faker Data Test', async({page})=>{


    for(let i = 1; i<=10; i++)
    {
    const name = faker.person.fullName();
    const email = faker.internet.email();

    

    await page.goto("https://automationexercise.com/login");

     await page.locator('[data-qa="signup-name"]').fill(name);
     await page.locator('[data-qa="signup-email"]').fill(email);

     await page.locator('[data-qa="signup-button"]').click();


    
     console.log(name);
     console.log(email);

     }
     

})