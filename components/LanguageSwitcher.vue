<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value
})

function updateLocale(event: Event) {
  setLocale((event.target as HTMLSelectElement).value)
  window.location.reload()
}

onMounted(() => {
  const langSwitcher = document.querySelector('#langSwitcher') as HTMLSelectElement
  langSwitcher.value = locale.value
})
</script>

<template>
  <div class="flex items-center gap-1">
    Language:
    <select id="langSwitcher" rounded-md text-sm p-1 @change="updateLocale">
      <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code" p-1>
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>
