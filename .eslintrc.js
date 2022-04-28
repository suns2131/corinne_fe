module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0, // 'React' must be in scope when using JSX 에러 제거
    'linebreak-style': 0, // 개행문자 에러 제거
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // 파일명 js 허용 
  },
};
