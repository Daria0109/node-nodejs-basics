import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    try {
		const content = await readFile(`${__dirname}/files/fileToCalculateHashFor.txt`);
		const hashSum = createHash('sha256');
		hashSum.update(content);

		const hex = hashSum.digest('hex');

		console.log(hex);
    } catch (error) {
		throw Error(error);
    }
};

await calculateHash();