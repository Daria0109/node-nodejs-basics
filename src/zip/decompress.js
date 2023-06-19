import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { __dirname } from './constants.js';

const readableStream = createReadStream(`${__dirname}/files/archive.gz`);
const writableStream = createWriteStream(`${__dirname}/files/fileToCompress.txt`);

const decompress = async () => {
	try {
		await pipeline(
			readableStream,
			createGunzip(),
			writableStream,
		);
	} catch (error) {
		throw Error(error);
	}
};

await decompress();