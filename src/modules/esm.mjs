import { sep, dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

try {
    if (random > 0.5) {
        const dataA = await readFile(`${__dirname}/files/a.json`, { encoding: 'utf-8' });
        unknownObject = JSON.parse(dataA);
    } else {
        const dataB = await readFile(`${__dirname}/files/b.json`, { encoding: 'utf-8' });
        unknownObject = JSON.parse(dataB);
    }
} catch (error) {
    throw Error(error);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
