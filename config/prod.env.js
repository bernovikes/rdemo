'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    // BASE_API: '"https://api.inkeu.com"'
    BASE_API: '"http://192.168.1.118:8900"'
})
