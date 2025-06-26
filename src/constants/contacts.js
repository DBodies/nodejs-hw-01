import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import * as path from 'node:path';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
export const PATH_DB = path.resolve(__dirname, '../db/db.json');
