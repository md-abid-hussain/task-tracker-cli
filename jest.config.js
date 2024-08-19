module.exports = {
    verbose: true,
    testMatch: ['<rootDir>/tests/**/*.test.ts'], // Ensure the correct path for test files
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'], // Allow Jest to recognize TypeScript and JavaScript files
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json', // Point to your tsconfig.json file
        },
    }
};