const tinify = require('../helper/tinify')

const compressImagePromise = (buffer) => {
  return new Promise((resolve, reject) => {
    tinify.fromBuffer(buffer).toBuffer((err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

const compressImage = (buffer, cb) => {
  tinify.fromBuffer(buffer).toBuffer((err, resultData) => {
    if (err) cb(err)
    cb(null, resultData)
  })
}

module.exports = { compressImage, compressImagePromise }
