export default {
    '**/*.{ts,tsx}': [() => 'npm run ts-check', 'npm run lint-files'],
    '**/*.{js,jsx,ts,tsx,html,css,json,md}': ['npm run format-files'],
};
