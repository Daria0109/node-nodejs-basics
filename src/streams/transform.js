import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const readableStream = process.stdin;
const writableStream = process.stdout;

const transformStream = new Transform({
	transform(chunk, encoding, callback) {
		const chunkString = chunk.toString().trim();

		const reversedChunkString = chunkString.split('').reverse().join('');

		this.push(reversedChunkString + '\n');

		callback();
	}
});

const transform = async () => {
   try {
	   await pipeline(
		   readableStream,
		   transformStream,
		   writableStream
	   );
   } catch (error) {
	   throw Error(error);
   }

};

await transform();