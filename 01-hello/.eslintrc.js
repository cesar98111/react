module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  setting:{
    react:{
      version: "detected",
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-rutine',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
