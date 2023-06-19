import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
	const file = 'src/cp/files/script.js';

	fork(file, args);
};

await spawnChildProcess([1, 2, 3]);
