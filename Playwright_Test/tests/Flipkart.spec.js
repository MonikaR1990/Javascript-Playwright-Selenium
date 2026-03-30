import { test, expect } from '@playwright/test';

test('Flipkart - Validate all iPhone titles', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    // Close login popup
    await page.locator('span:has-text("✕")').click();

    // Search iPhone
    await page.locator('input[name="q"]').first().fill('iPhone');
    await page.keyboard.press('Enter');

    // Wait for new locator
    await page.waitForSelector('div.RG5Slk');
    await page.waitForSelector("//a[contains(@href,'apple-iphone') and starts-with(@class,'k')]//div[contains(text(),'iPhone')]");

    // Get all titles
    const titles = await page.locator("//a[contains(@href,'apple-iphone') and starts-with(@class,'k')]//div[contains(text(),'iPhone')]").allTextContents();

    console.log("Total products:", titles.length);

    // Assertion
    for (let title of titles) {
        console.log(title);

        expect(title.toLowerCase(), `Failed for: ${title}`)
            .toContain('iphone');
    }
});