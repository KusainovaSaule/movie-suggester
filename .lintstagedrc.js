export default {
    '**/*.{ts,tsx}': [
        () => 'npm run ts-check',
        'npm run lint-files',
    ],
    '*': ['npm run format-files'],
};