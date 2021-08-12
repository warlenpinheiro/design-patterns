import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '<rootDir>/configs/',
    'jest.config.ts',
    '.json',
    '.snap',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
};

export default config;
