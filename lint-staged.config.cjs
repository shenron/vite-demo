module.exports = {
  '*.{js,jsx,vue}': [
    'eslint --cache',
  ],
  '*.{ts,tsx}': [
    () => 'tsc --skipLibCheck --noEmit',
    'eslint --cache',
  ],
};
