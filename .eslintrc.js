module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
};