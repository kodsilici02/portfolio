<template>
  <div class="box-shadow-button cursor-pointer flex justify-center items-center">
    <font-awesome class="main-text-color" :icon="['fab', 'github']" size="xl" />
  </div>
</template>
<style scoped>
.box-shadow-button {
  width: 80px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid var(--main-text-color);
  transition: 0.3s ease-in-out;
}
.box-shadow-button:hover {
  box-shadow: 0.3em 0.3em 0 0 var(--main-text-color), inset 0 0 0 0 var(--main-text-color);
  transform: translate(-5px, -5px);
}
</style>
