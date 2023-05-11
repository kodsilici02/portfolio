<template>
  <div class="w-full h-auto flex flex-wrap justify-center body overflow-hidden">
    <div class="w-11/12 lg:w-8/12 flex flex-wrap gap-y-7 main-box items-center">
      <div class="flex flex-wrap gap-y-7 content-center">
        <div class="w-full text-xl main-text-color my-element" v-motion :initial="initial" :enter="enter" :delay="600">Welcome to my portfolio</div>
        <div
          class="w-full text-4xl font-yolk"
          v-motion
          :initial="{
            opacity: 0,
            y: 30
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500
            }
          }"
          :delay="700"
        >
          Yazılım Panteri
        </div>
        <div
          class="font-yolk text-4xl w-full"
          v-motion
          :initial="{
            opacity: 0,
            y: 30
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500
            }
          }"
          :delay="800"
        >
          <div class="quote-1 text-4xl py-2">The Right Programmer for Your Own WebSite</div>
        </div>
        <div class="w-full">
          <div
            class="w-full lg:w-3/6 font-code-next text-lg"
            v-motion
            :initial="{
              opacity: 0,
              y: 30
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 500
              }
            }"
            :delay="900"
          >
            I am a young software developer who designs simple but effective websites. While making a design, I am a person who constantly learns new
            things and tries to be characteristic.
          </div>
        </div>
        <div
          class="box-shadow-button flex justify-center items-center"
          v-motion
          :initial="{
            opacity: 0,
            y: 30
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500
            }
          }"
          :delay="1000"
        >
          <div><DefaultButton></DefaultButton></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row w-11/12 lg:w-8/12 flex-wrap gap-3 main-box items-start mt-10" id="about">
      <div class="w-full md:w-3/5">
        <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
          <div v-motion-slide-visible-bottom class="text-4xl main-text-color font-yolk">About Me</div>
          <div v-motion-slide-visible-bottom class="flex-grow mr-5"><div class="w-full border-b-2 border-slate-500"></div></div>
          <div v-motion-slide-visible-bottom class="text-base w-full text-gray-400">
            <p v-motion-slide-visible-bottom>
              My name is Şafak, I am your favorite web designer. Tired of daily life and daily human conversations, I threw myself into the tense,
              ever-changing world of web design that rewards patience.
            </p>
            <p class="mt-3" v-motion-slide-visible-bottom>
              I really started web design in October 2022 and since then I have been trying to produce something new almost every day. I don't
              currently work for any company as I love freelancing, but I don't think it will be a problem for you. At the end of the day (week or
              month), I am ready to present you a very modern looking fullstack website supported by animations and passion.
            </p>
            <p class="mt-3" v-motion-slide-visible-bottom>Here are the software technologies that I know and use well for now:</p>
            <div class="w-full flex flex-wrap mt-7">
              <div class="w-4/5 flex flex-wrap gap-y-3">
                <div v-motion-slide-visible-bottom class="triangle w-1/2">Nuxt 3</div>
                <div v-motion-slide-visible-bottom class="triangle w-1/2">Vue 3</div>
                <div v-motion-slide-visible-bottom class="triangle w-1/2">JavaScript</div>
                <div v-motion-slide-visible-bottom class="triangle w-1/2">Node.js</div>
                <div v-motion-slide-visible-bottom class="triangle w-1/2">Express.js</div>
                <div v-motion-slide-visible-bottom class="triangle w-1/2">CSS</div>
              </div>
              <div class="w-full h-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-right class="w-full md:w-auto flex-grow h-28 bg-white mt-20"></div>
    </div>
    <div class="flex flex-col md:flex-row w-11/12 lg:w-8/12 flex-wrap gap-3 main-box content-start mt-10" id="packs">
      <div class="w-full">
        <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
          <div v-motion-slide-visible-bottom class="text-4xl main-text-color font-yolk">Our Packs</div>
          <div v-motion-slide-visible-bottom class="flex-grow mr-5"><div class="w-full border-b-2 border-slate-500"></div></div>
        </div>
      </div>
      <div v-motion-slide-visible-bottom class="w-full flex flex-wrap gap-3 mt-10">
        <div class="w-full sm:w-1/5 h-fit flex flex-wrap content-start packs sm:flex-col" ref="packs">
          <div v-for="(page, index) in pages" class="sm:w-full h-10 cursor-pointer items-center flex page-items p-2" @click="switchPage(index)">
            {{ page.text }}
          </div>
        </div>
        <div class="flex-shrink-1 flex-grow basis-0 overflow-hidden">
          <Transition name="vue-transition" mode="out-in">
            <component :is="selectedComponent"></component>
          </Transition>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap md:flex-row w-11/12 lg:w-8/12 gap-3 main-box content-start m-10" id="projects">
      <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
        <div v-motion-slide-visible-bottom class="text-4xl main-text-color font-yolk">Example Projects</div>
        <div v-motion-slide-visible-bottom class="flex-grow mr-5"><div class="w-full border-b-2 border-slate-500"></div></div>
      </div>
      <div class="w-full h-full flex flex-wrap md:flex-nowrap mt-10">
        <div v-motion-slide-visible-left class="w-full md:w-3/5 h-[60%] rounded-lg cursor-pointer" style="background-color: rgb(25, 34, 63)">
          <a href="#">
            <img
              class="h-full w-full object-cover object-center rounded-md opacity-60 hover:opacity-100"
              style="transition: opacity 0.5s ease"
              src="@/assets/example.jpg"
            />
          </a>
        </div>
        <div class="relative w-full md:w-2/5">
          <div class="w-full flex flex-wrap justify-end">
            <div v-motion-slide-visible-right class="w-full flex justify-end font-code-next py-3">Example Projects</div>
            <div v-motion-slide-visible-right class="w-full flex justify-end font-yolk price text-3xl pb-3">Project Name</div>
          </div>
          <div
            v-motion-slide-visible-right
            class="w-full right-0 md:w-[150%] md:right-[50%] rounded-md relative p-3 break-all"
            style="background-color: rgb(27, 41, 85)"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis assumenda eius, sint consectetur quae ratione autem veniam modi doloremque
            sapiente placeat dicta dignissimos maiores iure, est repellendus at quas consequatur?
          </div>
          <div class="w-full mt-3 flex gap-2 justify-end font-sans">
            <div v-motion-slide-visible-bottom>Vue 3</div>
            <div v-motion-slide-visible-bottom>Express.js</div>
            <di v-motion-slide-visible-bottom>MongoDB</di>
          </div>
          <div class="w-full mt-3 flex gap-5 justify-end">
            <font-awesome v-motion-slide-visible-bottom :icon="['fab', 'github']" class="text-2xl icon hover:custom-class cursor-pointer" />
            <a href="#" aria-label="link">
              <font-awesome
                v-motion-slide-visible-bottom
                :icon="['fas', 'arrow-up-right-from-square']"
                class="text-2xl icon hover:custom-class cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap md:flex-row w-11/12 lg:w-8/12 gap-3 main-box content-start m-10" id="contact">
      <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
        <div v-motion-slide-visible-bottom class="text-4xl main-text-color font-yolk">Get in Touch</div>
        <div v-motion-slide-visible-bottom class="flex-grow mr-5"><div class="w-full border-b-2 border-slate-500"></div></div>
      </div>
      <div class="w-full h-full flex flex-wrap mt-10 justify-center p-5">
        <div v-motion-slide-visible-bottom class=""><DefaultButton>Hire Me</DefaultButton></div>
      </div>
    </div>

    <div class="w-full h-96"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Basic from '@/components/Basic.vue'
import Standard from '@/components/Standard.vue'
import Premium from '@/components/Premium.vue'
const pages = [
  {
    component: Basic,
    text: 'Basic'
  },
  {
    component: Standard,
    text: 'Standard'
  },
  {
    component: Premium,
    text: 'Premium'
  }
]
const packs = ref(null)
var selectedComponent = ref(Basic)
const switchPage = index => {
  if (window.outerWidth > 640) {
    selectedComponent.value = pages[index].component
    const element = event.target
    const elementHeight = element.offsetHeight
    const packsEl = packs.value
    const afterEl = window.getComputedStyle(packsEl, ':after')
    // Calculate the desired top value
    const topValue = elementHeight * index
    // Add a new style rule for the ::after pseudo element
    packsEl.style.setProperty('--after-top', `${topValue}px`)
  } else {
    selectedComponent.value = pages[index].component
    const element = event.target
    const elementWidth = element.offsetWidth
    const packsEl = packs.value
    const afterEl = window.getComputedStyle(packsEl, ':after')
    const leftValue = 80 * index
    packsEl.style.setProperty('--after-left', `${leftValue}px`)
  }
}

const initial = {
  opacity: 0,
  y: 30
}
const enter = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 500
  }
}
function redirectToGmail() {
  const email = 'yazilimpanteri@gmail.com' // Replace with the email address you want to send the email to
  const url = `mailto:${email}`
  window.location.href = url
}
const emits = defineEmits(['scrollData'])
onMounted(() => {
  let about = document.getElementById('about')
  let aboutTop = about.getBoundingClientRect().top
  let packs = document.getElementById('packs')
  let packsTop = packs.getBoundingClientRect().top
  let projects = document.getElementById('projects')
  let projectsTop = projects.getBoundingClientRect().top
  let contact = document.getElementById('contact')
  let contactTop = contact.getBoundingClientRect().top
  let data = [
    {
      name: 'About',
      top: aboutTop
    },
    {
      name: 'Packs',
      top: packsTop
    },
    {
      name: 'Projects',
      top: projectsTop
    },
    {
      name: 'Contact',
      top: contactTop
    }
  ]
  emits('scrollData', data)
})
</script>
<style scoped>
.icon {
  transition: color 0.3s ease;
}
.icon:hover {
  color: var(--main-text-color);
}
.main-box {
  min-height: calc(100vh - 78px);
}
.packs {
  position: relative;
}
.page-items {
  width: auto;
}
@media (min-width: 640px) {
  .page-items {
    width: 80px;
  }
  .packs::before {
    content: '';
    position: absolute;
    width: 2px;
    left: 0;
    height: 100%;
    border-left: 2px solid rgb(141, 141, 141);
  }

  .packs::after {
    transition: all 0.5s;
    content: '';
    position: absolute;
    width: 2px;
    left: 0;
    top: var(--after-top, 0);
    height: 2.5rem;
    border-left: 2px solid rgb(0, 194, 104);
  }
}

@media (max-width: 639px) {
  .page-items {
    width: 80px;
    justify-content: center;
  }
  .packs::before {
    content: '';
    position: absolute;
    height: 2px;
    top: 100%;
    width: 100%;
    border-top: 2px solid rgb(141, 141, 141);
    transform: translateY(0px);
  }

  .packs::after {
    transition: all 0.5s;
    content: '';
    position: absolute;
    height: 2px;
    top: 100%;
    left: var(--after-left, 0);
    width: 80px;
    border-top: 2px solid rgb(0, 194, 104);
    transform: translateY(0px);
  }
}
.vue-transition-leave-active {
  transition: all 1s;
}
.vue-transition-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.vue-transition-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.vue-transition-enter-active {
  transition: all 1s;
}
.vue-transition-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.vue-transition-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.box {
  position: relative;
  border-radius: 10px;
}
.box::after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 30px;
  left: 30px;
  border: 5px solid greenyellow;
  border-radius: 10px;
}
.triangle::before {
  content: '';
  border-top: 5px solid transparent;
  border-left: 10px solid var(--main-text-color);
  border-bottom: 5px solid transparent;
  display: inline-block;
  margin-right: 10px;
}
.body {
  --main-text-color: rgb(54, 224, 148);
}
.quote-1 {
  height: fit-content;
  font-weight: bold;
  --bg-size: 200%;
  --color-one: rgb(222, 26, 26);
  --color-two: rgb(77, 126, 211);
  background: linear-gradient(-45deg, var(--color-one), var(--color-two), var(--color-one)) 0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 10s infinite linear;
}

@keyframes move-bg {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: 0 0;
  }
}

.main-text-color {
  color: var(--main-text-color);
}

.font-yolk {
  font-family: 'TPF Yolk Bold', sans-serif;
}
.font-code-next {
  font-family: 'Code Next Book', sans-serif;
}
</style>
<style></style>
<style src="@/assets/css/fonts.css"></style>
