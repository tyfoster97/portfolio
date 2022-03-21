import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  bail: true,
  clearMocks: true,
  preset: 'ts-jest',
  slowTestThreshold: 6,
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.tsx?'],
  testTimeout: 10000,
}

export default config
