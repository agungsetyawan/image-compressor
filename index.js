const path = require('path')
const fs = require('fs/promises')
require('dotenv').config()

const compressImage = require('./util/compressImage')
const convertWebp = require('./util/convertWebp')

const INPUT_PATH = './input'
const OUTPUT_PATH = './output'

const main = async () => {
  try {
    const files = await fs.readdir(INPUT_PATH)

    for (const file of files) {
      const ext = path.extname(file)
      if (ext) {
        const filename = path.basename(file, ext)
        const buffer = await fs.readFile(`${INPUT_PATH}/${file}`)
        const bufferWebp = await convertWebp(buffer, { lossless: false })

        const newFilePath = path.join(OUTPUT_PATH, `${filename}.webp`)

        if (ext.toLowerCase() === '.svg') {
          await fs.writeFile(newFilePath, bufferWebp)
        } else {
          compressImage(bufferWebp, async (err, bufferCompressedImage) => {
            if (err) throw err
            await fs.writeFile(newFilePath, bufferCompressedImage)
          })
        }
      }
    }
  } catch (error) {
    console.error(error)
  }
}

main()
