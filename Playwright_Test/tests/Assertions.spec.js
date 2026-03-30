//Assertion - Verification
// We use to check whether expected result = actual result 

//Assertion that ensures
//1. UI is correct
//2. Text is correct
//3. URL is correct
//4. Element is visible

//Playwright assertion has auto wait (it will wait untill the condition satisfy)


//test -> used to write test
//expect -> used for assertion

import {test, expect} from '@playwright/test'

test('Verify Title', async({page})=>
{
    await page.goto("https://www.facebook.com/"); //Facebook
    await expect(page).toHaveTitle("Facebook");

    await page.locator('[name="email"]').fill("monica@gmail.com");

});


//toHaveTitle
//toBeVisible
//toHaveText
//toContainText
//toHaveURL
//toHaveValue
//toBeChecked
//toBeEnabled
//toBeDisabled
//toContain
//toHaveCount
//toEqual
//toStrictEqual 
//toBeFlasy
//toBeTruthy
//toBe
