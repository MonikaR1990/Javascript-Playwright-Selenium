import {test} from '@playwright/test'

test('frame', async({page})=>{
    await page.goto("https://letcode.in/frame");

    const outerFrame = page.frameLocator('#firstFr');

    await outerFrame.locator('[name="fname"]').fill("Monika");
    await outerFrame.locator('[name="lname"]').fill("Monika");

    const innerFrame = outerFrame.frameLocator('[src="innerframe"]');

    await innerFrame.locator('[name="email"]').fill("monika@gmail.com");

    await outerFrame.locator('[name="fname"]').clear();
    await outerFrame.locator('[name="lname"]').clear();

    await page.getByText("Courses").click();

    await page.waitForTimeout(2000);

});