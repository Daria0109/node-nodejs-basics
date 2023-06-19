import fs from 'node:fs/promises';
import { join } from 'path';
import { __dirname, errorMessage } from './constants.js';

const folderPath = `${__dirname}/files`;
const newFolderPath = `${__dirname}/files_copy`;

const copy = async () => {
	try {
		await fs.access(folderPath);
		await fs.mkdir(newFolderPath)
		const files = await fs.readdir(folderPath);
		files.forEach((file) => {
			fs.copyFile(join(folderPath, file), join(newFolderPath, file));
		});
	} catch (error) {
		throw Error(errorMessage);
	}

};

await copy();
