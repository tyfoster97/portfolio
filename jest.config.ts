// eslint-disable-next-line import/no-anonymous-default-export
export default {
    bail: true,
    clearMocks: true,
    coverageProvider: 'v8',
    presets: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.tsx?'],
}