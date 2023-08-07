import { test as baseTest } from "@playwright/test"
import { AccountPage } from "../pages/accountPage";
import { CreateAccountPage } from "../pages/createAccountPage";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { MenJacketsPage } from "../pages/menJacketsPage";
import { SalePage } from "../pages/salePage";
import { EmailPage } from "../helpers/emailHelper/emailPage";

type allPages = {
    accountPage: AccountPage
    createAccountPage: CreateAccountPage
    homePage: HomePage
    loginPage: LoginPage
    menJacketsPage: MenJacketsPage
    salePage: SalePage
    emailPage: EmailPage
}

const pages = baseTest.extend<allPages>({
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    },
    createAccountPage: async ({ page }, use) => {
        await use(new CreateAccountPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    menJacketsPage: async ({ page }, use) => {
        await use(new MenJacketsPage(page));
    },

    salePage: async ({ page }, use) => {
        await use(new SalePage(page));
    },

    emailPage: async ({ page }, use) => {
        await use(new EmailPage(page));
    }
});

export const test = pages;
export const expect = pages.expect;