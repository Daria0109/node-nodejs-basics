const parseArgs = () => {
    const commandLineArgs = process.argv.slice(2);
    const parsedArgs = [];

    commandLineArgs.forEach((arg, i, arr) => {
        if (i % 2 === 0) {
            const value = `${arg} is ${arr[i + 1]}`;
            parsedArgs.push(value);
        }
    })

    console.log(parsedArgs.join(', '))
};

parseArgs();