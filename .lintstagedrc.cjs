module.exports = {
  '*.{js,jsx,ts,tsx}': ['npx prettier --write', 'npm run lint'],
  '*.{json,md}': ['npx prettier --write']
}
