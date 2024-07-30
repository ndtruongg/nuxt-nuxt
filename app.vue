<template>
  <NuxtLoadingIndicator />
  <div id="app-scroller">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: {
    lang: 'vi'
  },
  // charset: 'utf-8',
  title: 'Nuxt Nuxt',
  titleTemplate: (title) => (title !== 'Nuxt Nuxt' ? `${title} · Nuxt App` : title),
  meta: [
    {
      name: '',
      content: ''
    },
    { property: 'og:image', content: '' },
    { name: 'twitter:card', content: '' },
    { name: 'twitter:site', content: '@nuxt_js' },
    { name: 'twitter:creator', content: '@nuxt_js' }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/movies.webp'
    }
  ]
})
</script>
