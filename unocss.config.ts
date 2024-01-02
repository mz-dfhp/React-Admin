import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  rules: [],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center',
    },
  ],
  theme: {
    main: '#5B86E5',
  },
  transformers: [transformerAttributifyJsx()],
})
