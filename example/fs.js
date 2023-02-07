const fs = require('fs')

/* Node asks OS to read the file and waits for the result
before executing any more code. */
const package2 = fs.readFileSync('./package.json', {
    encoding: 'utf-8',
})
console.log('first', package2);

/* Node asks OS to read file, when its done it will add a function call to
a "work" queue to be executed */
fs.readFile('./package.json', { encoding: 'utf-8' }, (err, data) => {
    console.log('second', data)
})

/*  */
fs.promises.readFile('./package.json', {
    encoding: 'utf-8',
}).then(data => {
    console.log('third', data);
})

/*  */
async function main() {
    const package = await fs.promises.readFile('./package.json', {
        encoding: 'utf-8',
    })

    console.log('fourth', package);
}

main()
