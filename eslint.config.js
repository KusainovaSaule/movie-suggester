import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'vite.config.ts'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'simple-import-sort': simpleImportSort,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

            // Базовые правила
            curly: 'error',
            eqeqeq: 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'no-console': 'warn',

            // Чистота кода
            'no-else-return': 'error',
            'prefer-template': 'error',
            'prefer-arrow-callback': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'object-shorthand': 'error',
            'no-unneeded-ternary': 'error',

            // TypeScript
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/prefer-optional-chain': 'error',

            // React (добавлены)
            'react/jsx-boolean-value': 'error',
            'react/jsx-curly-brace-presence': 'error',
            'react/self-closing-comp': 'error',
            'react/jsx-no-useless-fragment': 'error',

            // Безопасность
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'require-await': 'error',

            // Импорты
            'no-const-assign': 'error',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    }
);
