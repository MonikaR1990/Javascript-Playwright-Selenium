export class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.loginBtn = page.locator('[value="Log in"]');
        this.userProfile = page.locator('.account').first();
        this.errorMsg = page.locator('.validation-summary-errors');
    }

    async navigate()
    {
        await this.page.goto("https://demowebshop.tricentis.com/login");
    }
    async enterLoginDetails(email, password)
    {
        await this.email.fill(email)
        await this.password.fill(password)
    }
    async clickLogin()
    {
        await this.loginBtn.click()
    }
    async verifyLogin()
    {
        return await this.userProfile.textContent();
    }
    async isErrorMsgVisible()
    {
        return await this.errorMsg.isVisible(); 
    }

}