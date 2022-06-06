const tinify = require('tinify')

tinify.key = process.env.TINIFY_API

tinify.validate(function (err) {
  if (err) throw err
  // Validation of API key failed.
})

module.exports = tinify
