import fs from 'node:fs/promises';
import { __dirname, errorMessage } from './constants.js';

const filePath = `${__dirname}/files/wrongFilename.txt`;
const renamedFilePath = `${__dirname}/files/properFilename.md`;

const rename = async () => {
	try {
		await fs.rename(filePath, renamedFilePath);
	} catch (error) {
		throw Error(errorMessage);
	}
};

await rename();