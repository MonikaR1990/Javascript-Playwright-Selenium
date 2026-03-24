import {test} from '@playwright/test'

test("Playwright Interactions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. fill (text type and clear)
    await page.locator('#name').fill("Latha"); //mostly recommeded

    await page.locator('#name').fill('');

    //await page.fill('#name', "Latha");

    //2. type (Character By Character, Slow Type)

    await page.locator('#email').type("Raju");

    //3. click

    await page.locator('button.start').click();

    await page.click('input#female');

    //4. check and uncheck

    await page.locator('#tuesday').check();

    await page.locator('#saturday').check();

    await page.locator('#saturday').uncheck();

    await page.check('#saturday');

    await page.uncheck('#saturday');

    //5. select (Drop down)

    await page.locator('#country').selectOption('france'); //based on value

    await page.locator('#country').selectOption({label:'Germany'}); //based on visible text

    await page.selectOption('#country', {label: 'Canada'}); //based on visible text

    await page.selectOption('#country', {index: 0}); //based on Index

    await page.locator('#colors').selectOption(['red', 'yellow']);

    //7. hover (Mouse Over)

    await page.locator('button.stop').hover();

    //8. double click

    await page.locator('text=Copy Text').dblclick();

    //9. Drag and Drop

    await page.dragAndDrop('#draggable', '#droppable');

    //10. Upload Files

    await page.setInputFiles('#singleFileInput', 'E:\Data.txt');

    await page.setInputFiles('#multipleFilesInput', ['E:\Data.txt', 'E:\Data1.txt']);

    //11. Press Keyboard Keys

    await page.locator('#Wikipedia1_wikipedia-search-input').fill("Selenium");

    await page.locator('#Wikipedia1_wikipedia-search-input').press('Enter');

    //12. Focus on Element

    await page.locator('#textarea').focus();

    //13. Scroll to Particular Element

    await page.locator('text=Upload Multiple Files').scrollIntoViewIfNeeded();

    //14. Right Click (Context Click)

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    await page.click('text=right click me', {button:'right'});

    await page.waitForTimeout(5000);
});