export class RegisterPage
{
    constructor(page)
    {
        this.page = page;
        this.genderMale = page.locator('#gender-male'); //
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registraionBtn = page.locator('#register-button');
        this.successMsg = page.locator('.result');
    }   
    async navigate()
    {
        await this.page.goto("https://demowebshop.tricentis.com/register");
    }
    async selectGender()
    {
        await this.genderMale.click();
    }
    async enterDetails()
    {
        await this.firstName.fill("Raju");
        await this.lastName.fill("G");
        await this.email.fill("rajug123@gmail.com")
        await this.password.fill("rajug@123");
        await this.confirmPassword.fill("rajug@123");
    }
    async clickRegister()
    {
        await this.registraionBtn.click();
    }
    async getSuccessMsg()
    {
        return await this.successMsg.textContent()
    }

}