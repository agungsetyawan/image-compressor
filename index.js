const imageCompressor = require('./libs/imageCompressor')

const args = process.argv.slice(2)
const inputPath = args[0] || './input'
const outputPath = args[1] || args[0] ? `${args[0]}/output` : './output'

const main = async () => {
  try {
    await imageCompressor(inputPath, outputPath)
    console.info('Complete')
  } catch (error) {
    console.error(error)
  }
}

main()
