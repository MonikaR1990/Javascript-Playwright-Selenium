import {test} from '@playwright/test'

test('Xpath Locators', async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Register.html");
    
    //Attribute
    await page.locator("//input[@placeholder='First Name']").fill("Monika");

    await page.locator("//input[@placeholder='Last Name']").fill("R");

    //Direct Tag name only

    await page.locator("//textarea").fill("Trichy");

    await page.locator("//input[contains(@ng-model,'Email')]").fill("monika@gmail.com");

    

    await page.locator("//input[@type='tel' or @ng-model='Phone']").fill("9378367363");

    await page.locator("//input[@type='radio' and @value='Male'][1]").click();
    
    await page.locator("//input[starts-with(@id,'first')]").fill("12345");

    await page.locator("//label[text()=' FeMale']").click();

    const title1 =await page.locator("//h1[contains(text(),'Automation')]").textContent();

    console.log(title1);

     const title2 =await page.locator("//h1[starts-with(text(),'Automation')]").textContent();

    console.log(title2);

  

    await page.goto("https://www.amazon.in/");

    //Focus on Child and get Parent

    await page.locator("//option[text()='Baby']//parent::select").click();

    //Focus on Parent and get Child

    await page.locator("//select//child::option[text()='Baby']").click();

    //Css
    // select option[value='search-alias=mobile-apps']

    //Xpath
    //select//option[@value='search-alias=mobile-apps']

    await page.waitForTimeout(2000);
});