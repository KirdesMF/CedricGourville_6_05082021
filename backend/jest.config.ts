import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
   verbose: true,
   testEnvironment: 'node',
   coverageReporters: ['text-summary', 'html', 'text'],
   coverageDirectory: './docs',
   preset: 'ts-jest',
};

export default config;
