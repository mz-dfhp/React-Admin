module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --cache --cache-location node_modules/.cache/eslint/',
    'prettier --write --cache'
  ],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json --cache'
  ],
  'package.json': ['prettier --write --cache'],
  '*.{scss,less,styl,html}': [
    'prettier --write --cache'
  ],
  '*.md': ['prettier --write --cache']
}
