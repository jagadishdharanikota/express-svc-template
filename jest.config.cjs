// jest.config.js
// Sync object

// Running test with ES6 code without Babel
// https://stackoverflow.com/questions/60372790/node-v13-jest-es6-native-support-for-modules-without-babel-or-esm

module.exports = {
  testEnvironment: 'jest-environment-node',
  transform: {},
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  errorOnDeprecated: true,
  rootDir: './',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/tests/**/*.[jt]s?(x)',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
};
