module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/mocks/', '/tests/'],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['**/*.ts'],
  setupFiles: ['<rootDir>/setupTests.ts'],
  globalSetup: '<rootDir>/dotEnvTestSetup.ts',
  // testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
};
