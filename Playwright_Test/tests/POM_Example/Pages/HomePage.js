export class HomePage
{
    /**
     * @param {import('@playwright/test').Page} 
     */
    constructor(page)
    {
        this.page = page;
        this.signupLoginBtn = page.locator("[href='/login']");
    }
    async gotoHomePage()
    {
        await this.page.goto("https://automationexercise.com/");
    }

   async clicksignupLoginBtn()
   {
        await this.signupLoginBtn.click();
   }
}

