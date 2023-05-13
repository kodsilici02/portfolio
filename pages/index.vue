<template>
  <div class="w-full h-auto flex flex-wrap flex-col items-center justify-center body overflow-hidden">
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
    <div class="flex w-11/12 lg:w-8/12 flex-wrap gap-3 main-box content-start items-start mt-10" ref="observing">
      <div class="w-full mb-10">
        <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
          <div v-motion-slide-visible-bottom class="text-4xl main-text-color font-yolk">Other technologies I use</div>
          <div v-motion-slide-visible-bottom class="flex-grow mr-5"><div class="w-full border-b-2 border-slate-500"></div></div>
        </div>
      </div>
      <div v-for="(row, row_index) in cards" class="flex flex-col sm:flex-row gap-3 w-full">
        <div v-for="(col, index) in row.cols" :data-image="col.name" class="flex-1 h-full elements cursor-pointer content pointer-cursor">
          <div class="w-full h-64 flex flex-col sm:flex-col gap-1" v-motion-slide-visible-left>
            <div class="h-3/6 w-full flex justify-center items-center"></div>
            <div class="h-3/6 w-full flex flex-wrap justify-center items-center p-1">
              <div class="w-full flex items-center gap-2 ml-3">
                <div v-html="col.html"></div>
                <div class="text-xl">{{ col.title }}</div>
              </div>
              <div class="w-full p-3">{{ col.text }}</div>
            </div>
          </div>
        </div>
      </div>
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
    <div class="flex flex-wrap md:flex-row w-11/12 lg:w-8/12 gap-3 main-box content-start mt-10" id="projects">
      <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
        <div v-motion-slide-visible-bottom class="text-4xl main-text-color font-yolk">Example Projects</div>
        <div v-motion-slide-visible-bottom class="flex-grow mr-5"><div class="w-full border-b-2 border-slate-500"></div></div>
      </div>
      <div class="w-full h-full flex flex-wrap md:flex-nowrap mt-10">
        <div v-motion-slide-visible-left class="w-full md:w-3/5 h-[60%] rounded-lg cursor-pointer">
          <a href="#">
            <img class="h-full w-full object-cover object-center image-transitions image-container image-container-md" src="@/assets/example.jpg" />
          </a>
        </div>
        <div class="relative w-full md:w-2/5">
          <div class="w-full flex flex-wrap justify-end">
            <div v-motion-slide-visible-right class="w-full flex justify-end font-code-next py-3">Example Projects</div>
            <div v-motion-slide-visible-right class="w-full flex justify-end font-yolk price text-3xl pb-3">Project Name</div>
          </div>
          <div
            v-motion-slide-visible-right
            class="w-full right-0 md:w-[120%] md:right-[20%] rounded-md relative p-3 break-all border-highlight"
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
    <div class="flex flex-wrap md:flex-row w-11/12 lg:w-8/12 gap-3 main-box content-start mt-20" id="contact">
      <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
        <div v-motion-slide-visible-bottom class="text-4xl main-text-color font-yolk">Get in Touch</div>
        <div v-motion-slide-visible-bottom class="flex-grow mr-5"><div class="w-full border-b-2 border-slate-500"></div></div>
      </div>
      <div class="w-full h-full flex flex-wrap mt-10 justify-center p-5">
        <div class="w-full flex justify-center items-center">
          <div class="w-4/6 flex justify-center font-code-next text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita, ea perferendis nesciunt labore maxime excepturi, autem
            adipisci ex sit ad reiciendis soluta rerum voluptatibus voluptates nam, quis a minima.
          </div>
        </div>
        <div v-motion-slide-visible-bottom class="mt-10"><DefaultButton @click="redirectToGmail">Hire Me</DefaultButton></div>
      </div>
    </div>

    <div class="w-full h-96 flex justify-center items-center">
      <div class="threeD">aaaaaaaaaa</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Basic from '@/components/Basic.vue'
import Standard from '@/components/Standard.vue'
import Premium from '@/components/Premium.vue'
const cards = [
  {
    cols: [
      {
        name: 'tailwind',
        title: 'Tailwind CSS',
        html: '<svg height="24" preserveAspectRatio="xMidYMid" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stop-color="#2298bd"/><stop offset="1" stop-color="#0ed7b5"/></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)"/></svg>',
        text: 'A CSS library designed for Custom styling'
      },
      {
        name: 'font_awesome',
        title: 'Font Awesome ',
        html: '<svg width="24" height="24" viewBox="0 0 256.00 256.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="0" y="0" width="256.00" height="256.00" rx="128" fill="#ffffff" strokewidth="0"/></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.048"/><g id="SVGRepo_iconCarrier"> <g> <path d="M227.314286,0 L28.6857143,0 C12.9714286,0 0,12.9714286 0,28.6857143 L0,227.314286 C0,243.028571 12.9714286,256 28.6857143,256 L227.314286,256 C243.028571,256 256,243.028571 256,227.314286 L256,28.6857143 C256,12.9714286 243.028571,0 227.314286,0 Z M201.371429,162.457143 C201.371429,164.857143 199.314286,165.885714 196.914286,166.914286 C187.371429,171.028571 177.142857,174.742857 166.171429,174.742857 C150.8,174.742857 143.657143,165.2 125.2,165.2 C111.885714,165.2 97.8857143,170 86.6285714,175.085714 C85.9428571,175.428571 85.2571429,175.428571 84.5714286,175.771429 L84.5714286,201.714286 C84.5714286,202.742857 84.5714286,203.771429 84.2285714,204.457143 L84.2285714,205.142857 C82.8571429,209.942857 78.4,213.314286 73.3142857,213.314286 C66.8571429,213.314286 61.7142857,208.171429 61.7142857,201.714286 L61.7142857,76.8 C57.2571429,73.3714286 54.2285714,67.9428571 54.2285714,61.7714286 C54.2285714,51.2 62.7428571,42.6285714 73.3714286,42.6285714 C83.9428571,42.6285714 92.5142857,51.1428571 92.5142857,61.7714286 C92.5142857,67.9428571 89.7714286,73.3714286 85.0285714,76.8 L85.0285714,87.3714286 C86.0571429,87.0285714 87.0857143,86.6857143 88.1142857,86 C98.6857143,81.5428571 111.314286,77.8285714 123.257143,77.8285714 C136.228571,77.8285714 146.457143,81.2571429 158.057143,85.6571429 C160.457143,86.6857143 162.857143,87.0285714 165.542857,87.0285714 C178.514286,87.0285714 192.857143,77.8285714 196.285714,77.8285714 C199.028571,77.8285714 201.428571,79.8857143 201.428571,82.2857143 L201.428571,162.457143 L201.371429,162.457143 Z" fill="#339AF0" fill-rule="nonzero"> </path> </g> </g></svg>',
        text: 'Icon library for a nice looking UI'
      },
      {
        name: 'mongodb',
        title: 'MongoDB',
        html: '<svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="-645.732" y1="839.188" x2="-654.59" y2="839.25" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0.231" stop-color="#999875"/><stop offset="0.563" stop-color="#9b9977"/><stop offset="0.683" stop-color="#a09f7e"/><stop offset="0.768" stop-color="#a9a889"/><stop offset="0.837" stop-color="#b7b69a"/><stop offset="0.896" stop-color="#c9c7b0"/><stop offset="0.948" stop-color="#deddcb"/><stop offset="0.994" stop-color="#f8f6eb"/><stop offset="1" stop-color="#fbf9ef"/></linearGradient><linearGradient id="b" x1="-644.287" y1="823.405" x2="-657.028" y2="845.476" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#48a547"/><stop offset="1" stop-color="#3f9143"/></linearGradient><linearGradient id="c" x1="-643.386" y1="839.485" x2="-652.418" y2="833.417" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41a247"/><stop offset="0.352" stop-color="#4ba74b"/><stop offset="0.956" stop-color="#67b554"/><stop offset="1" stop-color="#69b655"/></linearGradient></defs><title>file_type_mongo</title><path d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z" style="fill:url(#a)"/><path d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z" style="fill:url(#b)"/><path d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z" style="fill:url(#c)"/></svg>',
        text: 'Fast, efficient and easy to use NoSQL database'
      }
    ]
  },
  {
    cols: [
      {
        name: 'aws',
        title: 'AWS',
        html: '<svg width="30" height="30" viewBox="0 -30 150 150" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z" fill="#F90"/> <path d="M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z" fill="#F90"/><path d="M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z" fill="#fff"/></svg>',
        text: 'Cloud-based web services created by Amazon'
      },
      {
        name: 'vueuse',
        title: 'VueUse',
        html: '<svg width="24" height="24" viewBox="0 0 256 277" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><title>vueuse</title><g><path d="M202.96751,0 L202.96751,148.145904 C202.96751,189.550728 169.404824,223.113414 128,223.113414 C86.5951764,223.113414 53.0324895,189.550728 53.0324895,148.145904 L53.0324895,0 L106.068168,0 L106.068168,148.145904 C106.068168,155.981393 110.248351,163.221683 117.034084,167.139428 C123.819816,171.057172 132.180184,171.057172 138.965916,167.139428 C145.751649,163.221683 149.931832,155.981393 149.931832,148.145904 L149.931832,0 L202.96751,0 Z" fill="#35495E"></path><path d="M256,0 L256,148.145904 C256,218.839944 198.69404,276.165039 128,276.165039 C57.3059597,276.165039 0,218.839944 0,148.145904 L0,0 L53.0324895,0 L53.0324895,148.145904 C53.0324895,189.550728 86.5983656,223.113414 128,223.113414 C169.401634,223.113414 202.96751,189.550728 202.96751,148.145904 L202.96751,0 L256,0 Z" fill="#41B883"></path></g></svg>',
        text: 'A collection of utility functions for the Vue.js framework'
      },
      {
        name: 'lottie',
        title: 'Lottie',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 400 400" fill="none" id="lottiefiles-logo"><clipPath id="a"><path d="M0 0h400v400H0z"></path></clipPath><g clip-path="url(#a)"><path fill="#00ddb3" d="M298.783 0H101.217C45.317 0 0 45.317 0 101.217v197.566C0 354.683 45.316 400 101.217 400h197.566C354.683 400 400 354.683 400 298.783V101.217C400 45.317 354.683 0 298.783 0z"></path><path fill="#fff" d="M304.035 89.598c-68.951 0-94.382 49.158-114.885 88.663l-13.486 25.248c-21.74 41.899-37.964 67.35-79.781 67.35a19.756 19.756 0 0 0-13.995 5.784 19.769 19.769 0 0 0-4.291 21.56 19.758 19.758 0 0 0 10.713 10.702 19.756 19.756 0 0 0 7.573 1.499c68.951 0 94.382-49.158 114.885-88.663l13.405-25.248c21.74-41.899 37.964-67.35 79.781-67.35a19.763 19.763 0 0 0 18.286-12.201 19.77 19.77 0 0 0-4.291-21.56 19.763 19.763 0 0 0-13.995-5.784z"></path></g></svg>',
        text: 'JSON-based file format for easy animation and editing'
      }
    ]
  }
]

const observing = ref()
const showElement = ref(false)

let options = {
  root: null,
  rootMargin: '0px 0px 50% 0px',
  threshold: 1
}

const callback = entries => {
  showElement.value = true
}

let observer = new IntersectionObserver(callback, options)
onMounted(async () => {
  observer.observe(observing.value)
})
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
.card-image {
  background-image: url('@/assets/photos/tailwind.jpg');
}
.content {
  position: relative;
  transition: transform 0.3s ease;
  transform: translateY(0px) scale(1);
}
.content:hover {
  transform: translateY(-5px) scale(1.03);
}
.content:hover::after {
  opacity: 1;
}
.content::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(24, 24, 24, 0.7);
}
.content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: contain;
  border-radius: 10px;
  opacity: 0.4;
  transition: opacity 0.3s ease;
  background-image: none;
  -webkit-mask-image: linear-gradient(to top, transparent, rgb(253, 253, 255) 55%);
  mask-image: linear-gradient(to bottom, transparent 0%, rgb(255, 255, 255) 55%);
}
.content[data-image='tailwind']::after {
  background-image: url('@/assets/photos/tailwind.jpg');
}
.content[data-image='font_awesome']::after {
  background-image: url('@/assets/photos/font_awesome.png');
}
.content[data-image='mongodb']::after {
  background-image: url('@/assets/photos/mongodb.png');
}
.content[data-image='aws']::after {
  background-image: url('@/assets/photos/aws.png');
}
.content[data-image='vueuse']::after {
  background-image: url('@/assets/photos/vueuse.png');
}
.content[data-image='lottie']::after {
  background-image: url('@/assets/photos/lottie.png');
}
.threeD-effect {
  transition: transform 0.5s ease;
  transform: perspective(5000px) rotateY(0deg);
}
.threeD-effect:hover {
  transform: perspective(5000px) rotateY(20deg);
}
.image-container {
  opacity: 0.5;
  transform: perspective(5000px) rotateY(0deg);
}
.image-container:hover {
  opacity: 1;
  transform: perspective(5000px) rotateY(25deg);
}
.image-transitions {
  transition: transform 0.3s ease-in, right 0.3s ease-in, opacity 0.3s ease-in;
}
@media (min-width: 740px) {
  .image-container-md {
    position: relative;
    right: 0;
  }
  .image-container-md:hover {
    position: relative;
    right: 10%;
  }
}
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
<style src="@/assets/css/fonts.css"></style>
