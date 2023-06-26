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
    defaultError : "This is a required field.", 
    loginPageTitle : "Customer Login", 
    accountPageTitle : "My Account", 
    validEmail : "hazim.okanovic@mail7.io", 
    validPass : "Something1.", 
    jacketsTitle : "Jackets", 
    beaumontJacket : "Beaumont Summit Kit", 
    hyperionJacket : "Hyperion Elements Jacket", 
    price : "$42.00", 
    cartNumber : "10"
} as const;
