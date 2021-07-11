// built from a combination of:
//  - https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
//  - https://www.npmjs.com/package/eslint-config-airbnb-typescript
//  - https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
//  - some prior decisions around line length etc.

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: ['./tsconfig.json', './server/tsconfig.json'],
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: [
    'src/setupTests.ts',
    'server/dotEnvTestSetup.ts',
    'server/setupTests.ts',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-empty': 0,
    'member-ordering': 0,
    'no-consecutive-blank-lines': 0,
    'object-literal-sort-keys': 0,
    'ordered-imports': 0,
    'no-console': 0,
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    curly: ['error', 'multi-line'],
    'no-plusplus': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'no-underscore-dangle': 0,

    // see https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js for
    // the rationale for each of these
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true },
    ],

    // custom, just because it's annoying
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,

    // we use this technique in the forms lib
    'react/jsx-props-no-spreading': 0,

    // default makes code unnecessarily long
    'lines-between-class-members': 0,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
