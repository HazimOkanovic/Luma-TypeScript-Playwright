import { randomText } from "./utils/utils";

const userName = randomText();

export const Constants = {
    name : userName,
    userEmail : userName+"@inboxkitten.com",
    password : "Sifra123**",
} as const;


