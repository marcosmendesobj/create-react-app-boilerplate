module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/atoms/**/*.ts(x)?',
    'src/components/organisms/**/*.ts(x)?',
    'src/pages/**/*.ts(x)?',
    'src/pages/**/**/*.ts(x)?',
    '!src/**/**/**/*.d.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svg.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js'
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.ts?$': 'babel-jest',
    '\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  testRegex: '((test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/']
}
