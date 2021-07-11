module.exports = {
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageDirectory: '<rootDir>/tests/coverage/',
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
