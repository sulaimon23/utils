module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    env: {
        node: true,
        es2022: true,
    },
    ignorePatterns: ['lib/', 'node_modules/'],
    overrides: [
        {
            files: ['tests/**/*.spec.ts'],
            env: { mocha: true },
        },
    ],
};
