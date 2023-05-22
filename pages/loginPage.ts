import { Page } from "@playwright/test";
const Captcha = require("2captcha");

export default class LoginPage{
    constructor (public page: Page) { }

    async enterEmail(email: string){
        await this.emailInput.type(email);
    }

    async enterPassword(password: string){
        await this.passwordInput.type(password);
    }

    async clickSingInButton(){
        await this.signInButton.click();
    }

    async clickCreateAccountButton(){
        await this.createAccountButton.click();
    }

    get pageTitle(){
        return this.page.locator("//span[@data-ui-id='page-title-wrapper']");
      }
    
    get emailInput(){
        return this.page.locator("//input[@id = 'email']");
    }

    get passwordInput(){
        return this.page.locator("//input[@name= 'login[password]']");
    }

    get signInButton(){
        return this.page.locator("(//button[@id = 'send2'])[1]");
    }

    get emailError(){
        return this.page.locator("//div[@id = 'email-error']");
    }

    get passwordError(){
        return this.page.locator("//div[@id = 'pass-error']");
    }

    get createAccountButton(){
        return this.page.locator("//a[@class= 'action create primary']");
    }
}