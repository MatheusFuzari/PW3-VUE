<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomHeader from './components/CustomHeader.vue';
</script>

<template>
  <CustomHeader></CustomHeader>
  <RouterView />
</template>