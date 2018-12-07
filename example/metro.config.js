const path = require('path')

const projectRoot = __dirname
module.exports = {
  resolver: {
    extraNodeModules: {
      'react-native-toast-machine': path.resolve(projectRoot, '..')
    },
  },

  watchFolders: [
    path.resolve(projectRoot, '..')
  ]
}
