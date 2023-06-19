import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { __dirname } from './constants.js';

const readableStream = createReadStream(`${__dirname}/files/fileToCompress.txt`);
const writableStream = createWriteStream(`${__dirname}/files/archive.gz`);

const compress = async () => {
    try {
		await pipeline(
			readableStream,
			createGzip(),
			writableStream,
		);
    } catch (error) {
		throw Error(error);
    }
};

await compress();