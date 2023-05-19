import { randomText } from "./utils/utils";

const userName = randomText();

export const Constants = {
    name : userName,
    userEmail : userName+"@inboxkitten.com",
    password : "Sifra123**",
    createAccountPageTitle : "Create New Customer Account",
} as const;
