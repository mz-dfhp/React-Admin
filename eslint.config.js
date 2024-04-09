import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
})
