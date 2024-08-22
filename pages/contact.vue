<template>
  <NuxtLink :to="'/'">go back home</NuxtLink>
  <button
    type="button"
    class="text-blue rounded-lg border p-2 font-bold uppercase"
    @click="fetchData"
  >
    {{ $t('Hello Vietnam') }}
  </button>

  <LanguageSwitcher />
</template>

<script setup lang="ts">
definePageMeta({
  path: '/lien-he'
})

const fetchData = async () => {
  const res = await api('/comments')
  console.log(res)
}
</script>

<style scoped></style>
