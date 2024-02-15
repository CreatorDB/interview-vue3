<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('');
</script>

<template>
  <h1 className="text-lg font-bold">
    Do focus automatically & show me how to render 'name' only when I click 'Submit'
  </h1>
  <form class="flex flex-col gap-y-2">
    <input
      type="text"
      v-model="name"
      class="block rounded border border-gray-300 px-1 outline-none"
      placeholder="name"
    />
    <p>{{ name }}</p>
    <button type="submit" class="rounded-full border-blue-700 bg-blue-400 px-2 text-white">Submit</button>
  </form>
</template>
