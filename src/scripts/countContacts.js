import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const contacts = await readContacts();
    const contactsCount = contacts.length;
    return contactsCount;
};

console.log(await countContacts());
