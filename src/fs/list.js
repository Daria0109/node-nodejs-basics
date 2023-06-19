import fs from 'node:fs/promises';
import { join } from 'node:path';
import { __dirname, errorMessage } from './constants.js';

const folderPath = `${__dirname}/files`;

const list = async () => {
	try {
		const folderContent = await fs.readdir(folderPath);
		const files = [];

		for (const item of folderContent) {
			const stats = await fs.stat(join(folderPath, item));
			if (stats.isFile()) {
				files.push(item);
			}
		}

		console.log(files);
	} catch (error) {
		throw Error(errorMessage);
	}
};

await list();