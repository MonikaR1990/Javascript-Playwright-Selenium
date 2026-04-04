import { test } from '@playwright/test'

test('Upload File', async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('#singleFileInput').setInputFiles("F:\\TechNG\\Resumes_Prep\\Vasanth\\VasanthResume.docx");

    //await page.setInputFiles('#singleFileInput', "F:\\TechNG\\Resumes_Prep\\Vasanth\\VasanthResume.docx");

    //await page.locator().setInputFiles(['path1', 'path2', 'path3'])
    
    await page.locator('#multipleFilesInput').setInputFiles(['F:\\TechNG\\Resumes_Prep\\VigneshRaj\\Vignesh_Resume_New.docx', 'F:\\TechNG\\Resumes_Prep\\VigneshRaj\\Vignesh_Resume_Updated.docx', 'F:\\TechNG\\Resumes_Prep\\VigneshRaj\\VigneshResume.docx' ])


    await page.setInputFiles('#singleFileInput', []);

    await page.setInputFiles('#multipleFilesInput', ['F:\\TechNG\\Resumes_Prep\\VigneshRaj\\Vignesh_Resume_Updated.docx', 'F:\\TechNG\\Resumes_Prep\\VigneshRaj\\VigneshResume.docx' ]);

     await page.waitForTimeout(7000);
})

