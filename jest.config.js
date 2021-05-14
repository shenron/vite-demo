module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.(ts|js)x?$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
};
