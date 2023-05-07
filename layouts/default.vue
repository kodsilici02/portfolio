<template>
  <div class="w-full h-auto overflow-x-hidden" :class="{ dark: darkMode }">
    <!--<div
      class="w-4/6 sm:w-3/6 md:w-2/6 lg:w-1/4 h-full fixed top-0 left-0 bg-white transition duration-300 ease-in-out z-20 p-3"
      :style="{ transform: sideNavOpen ? 'translateX(0)' : 'translateX(-101%)' }"
    ></div>
    <div v-if="sideNavOpen" class="w-2/6 sm:w-3/6 md:w-4/6 lg:w-3/4 h-full fixed top-0 right-0 z-20" @click="toggleSideNav"></div>-->
    <!--Background-->
    <div class="w-full h-full fixed top-0 left-0" style="z-index: -1; background-color: rgb(10, 25, 47)">
      <!--<video autoplay muted loop class="w-full h-full">
        <source src="../assets/video2.mp4" />
      </video>-->
    </div>
    <!--TopBar-->
    <div class="w-full transition-opacity duration-300" :class="{ 'opacity-60': sideNavOpen }">
      <div class="fixed top-0 left-0 w-full flex h-12 justify-between items-center px-3 shadow-lg" style="background-color: rgb(13, 27, 50)">
        <div @click="toggleSideNav"><font-awesome :icon="['fas', 'bars']" size="xl" /></div>
      </div>
      <div class="text-white relative mt-12" style="z-index: 1"><slot></slot></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const darkMode = ref(true)
/*const sideNavOpen = ref(false)
const toggleSideNav = () => {
  sideNavOpen.value = !sideNavOpen.value
}*/
</script>

<style scoped>
.sidenav {
  transition: 0.3s ease;
}
.sidenav-close {
  overflow: hidden;
  width: 0px;
}
</style>
<style>
body {
  background-color: rgb(255, 255, 255);
}
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #212121;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(190, 190, 190);
}
</style>
