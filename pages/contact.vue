<template>
  <div
    v-for="item of 100"
    :key="item"
    :style="{ marginBottom: '10px', marginTop: '20px' }"
  >
    constact page
  </div>

  <NuxtLink :to="'/'">go back home</NuxtLink>
</template>

<script setup lang="ts"></script>

<style scoped></style>
