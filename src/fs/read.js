import fs from 'node:fs/promises';
import { __dirname, errorMessage } from './constants.js';

const filePath = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
	try {
		const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
		console.log(fileContent);
	} catch (error) {
		throw Error(errorMessage);
	}
};

await read();