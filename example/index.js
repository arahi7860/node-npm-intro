// Require = commonjs
// const fetch = require('node-fetch')

// ES modules = import
// Import needs the "type": "module" to be added to the package.json
import fetch from 'node-fetch'

async function main () {
    const data = await fetch('https://api.randomuser.me/')
    const json = await data.json()

    console.log(JSON.stringify(json));
}

main()