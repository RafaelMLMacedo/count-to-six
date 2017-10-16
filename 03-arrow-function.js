const args = process.argv.slice(2)

let result = args.map(str => str.substring(0, 1))
                 .reduce((accumulator, str) => accumulator + str)

console.log(`[${args}] becomes "${result}"`)