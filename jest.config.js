module.exports = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,jsx}'
  ],
  setupFiles: [
  ],
  testMatch: [
    '<rootDir>/test/*.js?(x)',
    '<rootDir>/test/?(*.)(spec|test).js?(x)'
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!transpile-me|transpile-me-too).+(js|jsx)$'
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  modulePaths: [
    'src'
  ]
}
