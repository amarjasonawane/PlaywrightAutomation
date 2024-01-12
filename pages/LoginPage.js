class LoginPage{
    constructor(page)
    {
        this.page = page;
        this.username = page.locator('id=username');
        this.password = page.locator('id=password');
        this.loginButton = page.locator('#login');

    }
    async goTo()
    {
        await this.page.goto("https://www.adactinhotelapp.com");
    }
    async login(userName,password)
    {
        await this.username.type('userName');
        await this.password.type('password');
        await this.loginButton.click();
    }
}

module.exports = {LoginPage}