import fs from 'node:fs/promises';
import { __dirname, errorMessage } from './constants.js';

const filePath = `${__dirname}/files/fileToRemove.txt`;

const remove = async () => {
	try {
		await fs.unlink(filePath);
	} catch (error) {
		throw Error(errorMessage);
	}

};

await remove();