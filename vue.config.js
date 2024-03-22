const { defineConfig } = require('@vue/cli-service')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? '/residencia/' : '/'
}

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
});