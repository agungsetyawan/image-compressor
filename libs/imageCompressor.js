const path = require('path')
const fs = require('fs/promises')
const fileSystem = require('fs')

const compressImage = require('../util/compressImage')
const convertWebp = require('../util/convertWebp')

const INPUT_PATH = './input'
const OUTPUT_PATH = './output'

const imageCompressor = async (
  inputPath = INPUT_PATH,
  outputPath = OUTPUT_PATH
) => {
  try {
    const files = await fs.readdir(inputPath)

    !fileSystem.existsSync(outputPath) &&
      fileSystem.mkdirSync(outputPath, { recursive: true })

    for (const file of files) {
      const ext = path.extname(file)
      if (ext) {
        const filename = path.basename(file, ext)
        const buffer = await fs.readFile(`${inputPath}/${file}`)
        const bufferWebp = await convertWebp(buffer, { lossless: false })

        const outputFile = path.join(outputPath, `${filename}.webp`)

        if (ext.toLowerCase() === '.svg') {
          await fs.writeFile(outputFile, bufferWebp)
        } else {
          const bufferCompressedImage =
            await compressImage.compressImagePromise(bufferWebp)
          await fs.writeFile(outputFile, bufferCompressedImage)
        }
      }
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = imageCompressor
