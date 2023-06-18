import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
	const cores = cpus().length;

	const promises = [];

	for (let i = 0; i < cores; i++) {
		const promise = new Promise((res, rej) => {
			const worker = new Worker(`${__dirname}/worker.js`, { workerData: i + 10 });
			worker.on('message', (data) => {
				res({ status: 'resolved', data });
			});

			worker.on('error', (error) => {
				res({ status: 'error', data: null });
			});
		})
		promises.push(promise);
	}

	return Promise.all(promises).then((results) => console.log(results));
};

await performCalculations();