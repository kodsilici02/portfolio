<template>
  <div class="w-full px-2 py-16 sm:px-0 flex flex-col space-y-5">
    <div class="flex space-x-4 items-center">
      <NuxtLink to="/posts/popular/childone">popular/one</NuxtLink>
      <NuxtLink to="/posts/popular/childtwo">popular/two</NuxtLink>
    </div>
    <slot></slot>
  </div>
</template>

<script setup></script>
