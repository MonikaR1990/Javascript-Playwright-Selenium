import {test} from '@playwright/test'

test('Download File', async({page})=>{
    await page.goto("https://letcode.in/file");

    //Start waiting for Download
    const downloadPromsie = page.waitForEvent('download'); 

    //Click download button
    await page.getByText("Download Excel").click();

    //Capture the Download
    const download = await downloadPromsie;

    //Save the File
    await download.saveAs('downloadFiles/' + download.suggestedFilename()); //permanent location

    const downloadPath = await download.path();
    console.log(downloadPath); //temporary loaction

    const downloadURL = download.url();
    console.log(downloadURL);

});