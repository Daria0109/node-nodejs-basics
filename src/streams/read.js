import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { __dirname } from './constants.js';

const readableStream = createReadStream(`${__dirname}/files/fileToRead.txt`);
const writableStream = process.stdout;

const read = async () => {
	try {
		await pipeline(
			readableStream,
			writableStream,
		);
	} catch (error) {
		throw Error(error);
	}
};

await read();