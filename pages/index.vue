<template>
  <NuxtLink :to="'/contact'">
    <NuxtImg
      :style="{ 'view-transition-name': `item-${111}` }"
      view-transition-name="ronaldo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
      class="h-[300px] w-[250px]"
    />
  </NuxtLink>

  <button @click="fetchData" class="text-blue rounded-lg border p-2 font-bold uppercase">
    fetch data
  </button>

  <a
    v-for="post of posts"
    :key="post.id"
    href="#"
    class="mb-10 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ post.title }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ post.body }}
    </p>
  </a>
</template>

<script setup lang="ts">
const posts = ref<{ id: number; userId: number; title: string; body: string }[] | null>()

posts.value = await api(`/posts`)

const fetchData = async () => {
  const res = await api('/comments')
  console.log(res)
}
</script>

<style scoped></style>
