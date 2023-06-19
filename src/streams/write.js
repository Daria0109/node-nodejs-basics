import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { __dirname } from './constants.js';

const readableStream = process.stdin;
const writableStream= createWriteStream(`${__dirname}/files/fileToWrite.txt`);

const write = async () => {
	try {
		await pipeline(
			readableStream,
			writableStream,
		);
	} catch (error) {
		throw Error(error);
	}
};

await write();