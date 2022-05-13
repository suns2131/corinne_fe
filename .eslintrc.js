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
    'react-hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': 0, // 'React' must be in scope when using JSX 에러 제거
    'linebreak-style': 0, // 개행문자 에러 제거
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // 파일명 js 허용 
    "react/jsx-props-no-spreading": 0, // props에 spread 허용
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn', // <--- THIS IS THE NEW RULE
    "react/prop-types": 0,
    "import/no-unresolved": 0,
    "no-unused-vars": 1,
    "import/no-extraneous-dependencies":0, //
    "import/prefer-default-export": 'off',
    "import/extenstions":["off"],
  },
};
