module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@helpers/*': './src/helpers',
          '@screens/*': './src/screens',
          '@assets/*': './src/assets',
          '@services/*': './src/services',
          '@interfaces/*': './src/interfaces',
        },
      },
    ],
  ],
}
