module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
    'prettier', // prettierのextendsは他のextendsより後に記述する
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
  },
  root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
  rules: {},
}

//   module.exports = {
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       project: './tsconfig.json',
//       sourceType: 'module',
//     },
//     plugins: ['@typescript-eslint/eslint-plugin'],
//     extends: ["eslint:recommended","prettier"],
//     root: true,
//     env: {
//       browser: true,
//       es6: true,
//     },
//     ignorePatterns: ['.eslintrc.js'], // !!! new and important part !!!
//     rules: {
//       '@typescript-eslint/interface-name-prefix': 'off',
//       '@typescript-eslint/explicit-function-return-type': 'off',
//       '@typescript-eslint/explicit-module-boundary-types': 'off',
//       '@typescript-eslint/no-explicit-any': 'off',
//     },
//   };
