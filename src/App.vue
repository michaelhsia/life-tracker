<template>
  <Header class="mt-3" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>



<style scoped>
.mt-3 {
  margin-top: 12px;
}
</style>
