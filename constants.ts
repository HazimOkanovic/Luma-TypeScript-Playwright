import { randomText } from "./utils/utils";

const userName = randomText();

export const Constants = {
    name : userName,
    userEmail : userName+"@inboxkitten.com",
    password : "Sifra123**",
    createAccountPageTitle : "Create New Customer Account",
    emailTitle : "Welcome to Main Website Store", 
    emailError : "Please enter a valid email address (Ex: johndoe@domain.com).", 
    samePasswordError : "Please enter the same value again.", 
    createAccountError : "This is a required field."
} as const;
