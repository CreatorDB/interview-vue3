<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('');
</script>

<template>
  <h1 className="text-lg font-bold">Do debounced-name</h1>
  <form class="flex flex-col gap-y-2">
    <input
      type="text"
      v-model="name"
      class="block rounded border border-gray-300 px-1 outline-none"
      placeholder="name"
    />
    <p>{{ name }}</p>
  </form>
</template>
