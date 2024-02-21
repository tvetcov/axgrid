module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname
    },
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.routes.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ],
        'import/extensions': 0,
        'import/order': [
            'error',
            { groups: [['builtin', 'external', 'internal']] }
        ],
        'import/no-restricted-paths': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
                moduleDirectory: ['src', 'node_modules']
            }
        }
    }
};
