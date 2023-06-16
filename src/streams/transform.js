import { Transform, pipeline } from 'node:stream';

const readableStream = process.stdin;
const writableStream = process.stdout;

const transform = async () => {
    const transform = new Transform({
	    transform(chunk, encoding, callback) {
			const chunkString = chunk.toString().trim();

			const reversedChunkString = chunkString.split('').reverse().join('');

			this.push(reversedChunkString + '\n');

			callback();
	    }
    });

	pipeline(
		readableStream,
		transform,
		writableStream,
		(error) => `Error ${error}`
	);
};

await transform();