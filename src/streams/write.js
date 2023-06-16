import { createWriteStream } from 'fs';
import { __dirname } from './constants.js';

const write = async () => {
	const readFromTerminal = process.stdin;
	const writeToFile = createWriteStream(`${__dirname}/files/fileToWrite.txt`);

	readFromTerminal.pipe(writeToFile);
};

await write();