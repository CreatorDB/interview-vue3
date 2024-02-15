<script setup lang="ts"></script>

<template>
  <div class="flex h-screen flex-col items-center gap-y-10 pt-10">
    <div class="flex gap-x-4">
      <router-link to="/test-1" activeClass="text-red-500">test-1</router-link>
      <router-link to="/test-2" activeClass="text-red-500">test-2</router-link>
      <router-link to="/test-3" activeClass="text-red-500">test-3</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
