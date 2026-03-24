import {test} from '@playwright/test'

test('URL Launch', async({page})=>
{
    await page.goto("https://www.google.com/");

    //await page.locator('textarea#APjFqb').fill("Selenium");

    //await page.locator('textarea.gLFyf').fill("Java");

    await page.locator('[aria-label="Search"]').fill("HTML");

    await page.locator('text=About').click();


    await page.waitForTimeout(2000);
    

    //cssSelector
    //getBy
    //Xpath

    //CssSelector
    //1.id --> #idValue
    //2.classname --> .classValue
    //3. other attribute --> [title='Search'] [name='q']
    //text not possible to search but we can locate
    //tagname //locate a, div, textarea

});