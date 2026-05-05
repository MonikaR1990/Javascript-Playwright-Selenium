import { test } from '@playwright/test'

test('Table Data', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = page.locator('[name="BookTable"]')

    //Get number of rows
    const rows = table.locator("tr"); //rows
    const rowCount = await rows.count();

    console.log(rowCount); //7

    //Get numbers of Column
    const cols = rows.locator("th");
    const colCount = await cols.count();

    console.log(colCount);

    for(let i = 1; i<rowCount; i++)
    {
        const cells = rows.nth(i).locator("td");
        const cellText = await cells.allTextContents();
        console.log(cellText.join("|"));

        // for(let text of cellText)
        // {
        //     console.log(text)
        // }
    }



})