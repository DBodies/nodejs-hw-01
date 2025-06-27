import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import * as path from 'node:path';



export const getAllContacts = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = dirname(__fileName);
    const dbPath = path.resolve(__dirname, '../db/db.json');

    try {
        const contacts = await fs.readFile(dbPath, 'utf-8');
        const parse = await JSON.parse(contacts);
        return parse;
    } catch (err) {
        console.error(err);
    }
};

console.log(await getAllContacts());
