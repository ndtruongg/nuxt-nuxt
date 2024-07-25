import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  typescript: true,
  ...compat.config({
    extends: ['eslint:recommended', '@vue/eslint-config-prettier/skip-formatting']
  })
})
