import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
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