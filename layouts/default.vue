<template>
  <div class="w-full h-auto overflow-x-hidden body" :class="{ dark: darkMode }">
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
    <div class="w-full transition-opacity duration-300">
      <div
        class="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 shadow-lg"
        ref="topbar"
        style="background-color: rgb(13, 27, 50)"
      >
        <div><font-awesome class="main-text-color" :icon="['fas', 'circle-user']" size="2xl" /></div>
        <div class="flex items-center justify-center gap-3">
          <div class="flex items-center justify-center text-gray-300 gap-3 mr-5">
            <NuxtLink to="/about"><div class="cursor-pointer hover-link">About</div></NuxtLink>
            <div class="cursor-pointer hover-link">Projects</div>
            <div class="cursor-pointer hover-link">Contact</div>
          </div>
          <div class="github flex justify-center items-center"><font-awesome class="main-text-color" :icon="['fab', 'github']" size="xl" /></div>
        </div>
      </div>
      <div class="text-white relative p-5" style="z-index: 1" :style="{ marginTop: marginTop }">
        <lot></lot>
      </div>
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
const topbar = ref(null)
const marginTop = ref(null)
onMounted(async () => {
  setTimeout(() => {
    marginTop.value = topbar.value.offsetHeight + 'px'
  }, 100)
})
</script>

<style>
.body {
  --main-text-color: rgb(54, 224, 148);
}
.hover-link {
  position: relative;
}
.hover-link::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--main-text-color);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.main-text-color {
  color: var(--main-text-color);
}
.github {
  width: 80px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid var(--main-text-color);
  transition: 0.3s ease-in-out;
}
.github:hover {
  box-shadow: 0.3em 0.3em 0 0 var(--main-text-color), inset 0 0 0 0 var(--main-text-color);
  transform: translate(-5px, -5px);
}
.sidenav {
  transition: 0.3s ease;
}
.sidenav-close {
  overflow: hidden;
  width: 0px;
}
</style>

<style>
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
