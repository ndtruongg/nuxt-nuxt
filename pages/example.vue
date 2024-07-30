<template>
  <div>
    <NuxtImg
      placeholder
      placeholder-class="blur-xl"
      alt=""
      :loading="'lazy'"
      :style="{ 'view-transition-name': `item-${111}` }"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
      class="h-[600px] w-[500px]"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
