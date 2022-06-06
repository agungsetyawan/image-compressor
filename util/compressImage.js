const tinify = require('../helper/tinify')

const compressImage = (buffer, cb) => {
  tinify.fromBuffer(buffer).toBuffer((err, resultData) => {
    if (err) cb(err)
    cb(null, resultData)
  })
}

module.exports = compressImage
