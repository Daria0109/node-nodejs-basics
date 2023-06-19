import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
	const file = 'src/cp/files/script.js';
    const child = spawn(`node`, [file, ...args], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });

	process.stdin.pipe(child.stdin);

	child.stdout.pipe(process.stdout);

};

await spawnChildProcess([1, 2, 3]);
