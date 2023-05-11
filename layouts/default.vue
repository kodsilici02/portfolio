<template>
  <div v-if="downloaded" class="w-full h-auto overflow-x-hidden body" :class="{ dark: darkMode }">
    <!--<div
      class="w-4/6 sm:w-3/6 md:w-2/6 lg:w-1/4 h-full fixed top-0 left-0 bg-white transition duration-300 ease-in-out z-20 p-3"
      :style="{ transform: sideNavOpen ? 'translateX(0)' : 'translateX(-101%)' }"
    ></div>
    <div v-if="sideNavOpen" class="w-2/6 sm:w-3/6 md:w-4/6 lg:w-3/4 h-full fixed top-0 right-0 z-20" @click="toggleSideNav"></div>-->
    <!--Background-->
    <div class="w-full h-full fixed top-0 left-0" style="z-index: -2; background-color: rgb(10, 25, 47)">
      <!--<video autoplay muted loop class="w-full h-full">
        <source src="../assets/video2.mp4" />
      </video>-->
    </div>
    <!--TopBar-->
    <div class="w-full transition-opacity duration-300">
      <div
        class="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 shadow-lg z-20"
        ref="topbar"
        style="background-color: rgb(13, 27, 50)"
      >
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: -50
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500
            }
          }"
        >
          <NuxtLink to="/#about"><font-awesome class="main-text-color icon-link" :icon="['fas', 'circle-user']" size="2xl" /></NuxtLink>
        </div>
        <div class="flex items-center justify-center gap-3">
          <div class="flex items-center justify-center text-gray-300 gap-3 mr-5">
            <div
              v-for="(link, index) in links"
              :key="link.id"
              class="cursor-pointer hover-link"
              v-motion
              :initial="{
                opacity: 0,
                y: -100
              }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 500
                }
              }"
              :delay="100 * link.id"
            >
              <div @click="emitEvent(link.label)">{{ link.label }}</div>
            </div>
          </div>
          <a
            href="https://github.com/kodsilici02"
            target="_blank"
            v-motion
            :initial="{
              opacity: 0,
              y: -50
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500
              }
            }"
            :delay="500"
          >
            <DefaultButton><font-awesome class="main-text-color" :icon="['fab', 'github']" size="xl" /></DefaultButton>
          </a>
        </div>
      </div>
      <!--main content-->
      <div class="text-white relative p-5" style="z-index: 1" :style="{ marginTop: 78 + 'px' }">
        <slot @button="button"></slot>
      </div>
    </div>
    <!--SideBar left-->
    <div
      v-motion
      :initial="{
        opacity: 0,
        x: -50
      }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: {
          duration: 500
        }
      }"
      :delay="1100"
      class="fixed top-0 left-0 hidden lg:flex lg:flex-col lg:w-2/12 h-full justify-end items-center gap-3 z-10"
    >
      <div>
        <font-awesome
          class="text-white cursor-pointer icons-hover transition ease-in-out duration-300"
          size="xl"
          :icon="['fab', 'github']"
        ></font-awesome>
      </div>
      <div>
        <font-awesome
          class="text-white cursor-pointer icons-hover transition ease-in-out duration-300"
          size="xl"
          :icon="['fab', 'twitter']"
        ></font-awesome>
      </div>
      <div class="h-1/6 border-r-2 border-gray-50 w-0"></div>
    </div>
    <!--SideBar right-->
    <div
      v-motion
      :initial="{
        opacity: 0,
        x: 50
      }"
      :enter="{
        opacity: 1,
        x: 0,
        transition: {
          duration: 500
        }
      }"
      :delay="1100"
      class="fixed top-0 right-0 hidden lg:flex lg:flex-col lg:w-2/12 h-full justify-end items-center gap-15 z-10"
    >
      <div class="text-white mb-24 ml-1 email cursor-pointer" @click="redirectToGmail">yazilimpanteri@gmail.com</div>

      <div class="h-1/6 border-r-2 border-gray-50 w-0"></div>
    </div>
  </div>
  <div
    v-else
    class="fixed top-0 left-0 h-full w-full body flex items-center justify-center"
    style="z-index: 0"
    :class="{ dark: darkMode }"
    v-motion
    :initial="{
      opacity: 1
    }"
    :enter="{
      opacity: 0,
      transition: {
        duration: 500
      }
    }"
    :delay="1500"
  >
    <div class="text-6xl text-white font-bold">Loading</div>
  </div>
  <!--Background2-->
  <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center" style="z-index: -1">
    <div class="rounded-[50%] circle" ref="circle"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
const circle = ref(null)

const onMouseMove = event => {
  if (circle.value != null) {
    const circleElement = circle.value
    const { width, height } = circleElement.getBoundingClientRect()
    const cx = circleElement.offsetLeft + width / 2
    const cy = circleElement.offsetTop + height / 2
    const dx = event.clientX - cx
    const dy = event.clientY - cy
    const distance = Math.sqrt(dx ** 2 + dy ** 2)
    const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
    const opacity = Math.max(0.4, Math.min(0.8, 0.8 - distance / maxDistance))
    const x = dx
    const y = dy
    circleElement.style.transform = `translate(${x}px, ${y}px)`
    circleElement.style.opacity = opacity
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
function redirectToGmail() {
  const email = 'yazilimpanteri@gmail.com' // Replace with the email address you want to send the email to
  const url = `mailto:${email}`
  window.location.href = url
}
const emits = defineEmits(['scrollToLayout'])
const emitEvent = label => {
  emits('scrollToLayout', label)
}
const links = ref([
  { id: 1, label: 'About' },
  { id: 2, label: 'Packs' },
  { id: 3, label: 'Projects' },
  { id: 4, label: 'Contact' }
])
const downloaded = ref(false)
const darkMode = ref(true)
/*const sideNavOpen = ref(false)
const toggleSideNav = () => {
  sideNavOpen.value = !sideNavOpen.value
}*/
const topbar = ref(null)
const marginTop = ref(null)
onMounted(async () => {
  setTimeout(() => {
    downloaded.value = true
  }, 2000)
  setTimeout(() => {
    window.scrollTo({
      top: 0
    })
  }, 2000)
})
</script>

<style scoped>
.circle {
  width: 900px;
  height: 900px;
  background-image: radial-gradient(ellipse at center, rgba(54, 224, 148, 0.7) 0%, rgba(255, 255, 255, 0) 50%);
}
.email {
  transition: color 0.3s ease, bottom 0.3s ease;
  transform: rotate(90deg);
  position: relative;
  bottom: 0px;
}

.email:hover {
  bottom: 10px; /* add bottom property to lift the element by 10px */
  color: var(--main-text-color);
}

.icons-hover:hover {
  transform: translateY(-5px);
  color: var(--main-text-color);
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
.sidenav {
  transition: 0.3s ease;
}
.sidenav-close {
  overflow: hidden;
  width: 0px;
}
</style>

<style>
html {
  background-color: rgb(13, 27, 50);
}
.body {
  --main-text-color: rgb(54, 224, 148);
}
.main-text-color {
  color: var(--main-text-color);
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
