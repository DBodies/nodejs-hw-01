import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const parse = JSON.parse(data);
    return parse;
};
readContacts();
