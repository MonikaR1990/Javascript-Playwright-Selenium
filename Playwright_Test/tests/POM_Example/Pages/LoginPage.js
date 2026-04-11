export class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.emailInput = page.locator("//input[@name='email']").first();
        this.passwordInput = page.locator("//input[@name='password']");
        this.loginBtn = page.locator('.btn.btn-default').first();

        this.loggedInUser = page.locator("//a[contains(text(),'Logged')]");
        this.errorMsg = page.locator("//p[contains(text(),'incorrect')]");
    }
    async login(emailId, password)
    {
        await this.emailInput.fill(emailId);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

}