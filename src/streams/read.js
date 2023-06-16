import { createReadStream } from 'fs';
import { __dirname } from './constants.js';

const read = async () => {
	const readableStream = createReadStream(`${__dirname}/files/fileToRead.txt`);

	readableStream.on('data', (chunk) => {
		process.stdout.write(chunk + '\n');
    })
};

await read();