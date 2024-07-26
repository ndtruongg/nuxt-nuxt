// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  rules: [[/^view-transition-([\w-]+)$/, ([, name]) => ({ 'view-transition-name': name })]]
})
