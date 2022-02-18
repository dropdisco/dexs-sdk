
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dexswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dexswap-sdk.cjs.development.js')
}
