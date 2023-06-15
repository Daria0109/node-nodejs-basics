import fs from 'node:fs/promises';
import { __dirname, errorMessage } from './constants.js';

const folderPath = `${__dirname}/files`;

const list = async () => {
	try {
		const files = await fs.readdir(folderPath);
		console.log(files);
	} catch (error) {
		throw Error(errorMessage);
	}
};

await list();