const sharp = require('sharp')

const convertWebp = async (input, options = {}) => {
  try {
    return await sharp(input).webp(options).toBuffer()
  } catch (error) {
    console.error(error)
  }
}

module.exports = convertWebp
