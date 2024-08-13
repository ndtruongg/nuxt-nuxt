<template>
  <div>hello world</div>

  {{ data }}

  <a href="/api/todos" target="_blank">To the endpoint</a>
</template>

<script setup lang="ts">
const { data, status } = await useFetch('/api/todos', { server: true })

console.log(status.value)
</script>

<style scoped></style>
