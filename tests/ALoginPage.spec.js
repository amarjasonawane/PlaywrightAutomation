const { test, expect } = require('@playwright/test');

const {LoginPage} = require('../pages/LoginPage');
test('Login Test',async({page}) =>
{
    const name = "amarjasonawane";
    const pass = "Amarja@123";
   
    const lp = new LoginPage(page);
    await lp.goTo();
    await lp.login(name,pass);
})