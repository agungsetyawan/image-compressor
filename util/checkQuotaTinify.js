const tinify = require('../helper/tinify')

const compressionsThisMonth = () => tinify.compressionCount

module.exports = compressionsThisMonth
