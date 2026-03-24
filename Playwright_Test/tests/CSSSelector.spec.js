import {test} from '@playwright/test'

test('CSSSelector Concepts', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/login");

    //CSS Selector 
    //1 ID - #
    await page.locator('#username').fill("tomsmith");
    await page.locator('#password').fill("SuperSecretPassword!");

    //2. Class - .
    //await page.locator('.radius').click();
    
    //3. tagname
    await page.locator("button").click();

    await page.waitForTimeout(2000);


    await page.goto("https://testautomationpractice.blogspot.com/");

    //4. Exact Attribute match

    await page.locator('[placeholder="Enter Name"]').fill("Monika");
    await page.locator('[name="start"]').click();

    //5. Attribute Contains Value - *

    await page.locator('[placeholder*="EMail"]').fill("monika@gmail.com");

    //await page.locator('[href*="udemy"]').click();

    //5. Attribute Startswith Value - ^
    
    await page.locator('[id^="alert"]').click();

    //6. Attribute Endswith Value - $

    await page.locator('input[placeholder$="Phone"]').fill("9600393318");

    //7. Coimbaining Selector

    await page.locator('textarea.form-control#textarea').fill("TRICHY");

    //8. Parent --> Child 

    await page.locator("span input").first().fill("Selenium");

    await page.locator("span input").last().click();

    //9. Siblings +

    await page.locator('input+label:has-text("Female")').click();


    //10. text (Exact match)

    //await page.locator('text = Udemy Courses').click();

    //11. text contains

    //await page.locator('text=/Udemy/').click();

    await page.locator('a:has-text("Udemy Courses")').click();


    await page.waitForTimeout(3000);










});
