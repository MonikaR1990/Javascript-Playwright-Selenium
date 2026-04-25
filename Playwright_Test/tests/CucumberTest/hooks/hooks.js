import { Before, After, AfterStep } from '@cucumber/cucumber';
import { chromium } from 'playwright'; // ✅ FIXED

Before(async function () {  // ✅ FIXED (normal function)
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {  // ✅ FIXED
    await this.page.close();
    await this.browser.close();
});

AfterStep(async function ({ result }) {  // ✅ FIXED
    if (result.status === 'FAILED') {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
});