import {
  presetUno,
  presetAttributify,
  presetIcons,
  defineConfig,
  transformerAttributifyJsx
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center'
    }
  ],
  theme: {
    main: '#f5f5f5'
  },
  transformers: [
    transformerAttributifyJsx() // <--
  ]
})
