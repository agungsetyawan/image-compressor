const tinify = require('tinify')

tinify.key = process.env.TINIFY_API

module.exports = tinify
