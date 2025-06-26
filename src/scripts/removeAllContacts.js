import { writeContacts } from "../utils/writeContacts.js";


export const removeAllContacts = async () => {
    const clearArray = [];
    await writeContacts(clearArray);
    return clearArray;

};

removeAllContacts();
