<template>
  <div>hello world</div>

  {{ data }}

  <a href="/api/todos" target="_blank">To the endpoint</a>
</template>

<script setup lang="ts">
const { data, status } = await useAsyncData('/api/todos', () => $fetch('/api/todos'))

// const { data: data2 } = await useFetch('/api/comments')
</script>

<style scoped></style>
