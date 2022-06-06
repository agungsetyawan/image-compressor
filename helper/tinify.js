require('dotenv').config()
const tinify = require('tinify')

tinify.key = process.env.TINIFY_API

tinify.validate((err) => {
  if (err) throw err
  console.info('Remaining Quota:', 500 - (tinify.compressionCount || 0))
})

module.exports = tinify
