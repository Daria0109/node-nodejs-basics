import fs from 'node:fs/promises';
import { __dirname, errorMessage } from './constants.js';

const filePath = `${__dirname}/files/fresh.txt`;

const create = async () => {
    try {
	    await fs.appendFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
		throw Error(errorMessage);
    }
};

await create();