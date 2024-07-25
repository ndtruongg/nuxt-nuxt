<template>
  <User />
  <button @click="fetchData" class="p-2 border rounded-lg text-blue uppercase font-bold">fetch data</button>

  <!-- <p v-for="item of data" 
   :key="item.title">{{ item.title }}</p> -->

   <p>{{ data }}</p>

  <NuxtLink :to="'/contact'"> Contact page </NuxtLink>
</template>

<script setup lang="ts">
const { user } = initData();

const { data } = await useFetch('https://api.api-ninjas.com/v1/planets?name=Neptune',{
  headers: {
    'X-Api-Key': '9pu3SsGq7eU2s6ZkoO3Dxw==FHiXgJOqvqSYQ4LW'
  }
})

const fetchData = async () => {
  const res = await $fetch('/api/posts')
  console.log(res)
}
</script>

<style scoped></style>
