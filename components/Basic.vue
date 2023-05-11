<template>
  <div class="w-full h-full">
    <div class="flex justify-between">
      <div class="text-4xl font-yolk">Basic Pack</div>
      <div class="text-4xl price">20$</div>
    </div>
    <div class="font-code-next mt-3">Landing Page + Contact Page</div>
    <div class="main-text-color mt-3 flex gap-2 items-center">
      <font-awesome :icon="['fas', 'clock']" />
      <div>3 Days Delivery</div>
      <font-awesome class="ml-3" :icon="['fas', 'arrow-rotate-right']" />
      <div>1 Revision</div>
    </div>
    <div class="flex flex-col justify-start w-full mt-3">
      <div class="flex items-center gap-2">
        <font-awesome class="main-text-color w-fit" :icon="['fas', 'check']" />
        Functional WebSite
      </div>
      <div class="flex items-center gap-2">
        <font-awesome class="main-text-color w-fit" :icon="['fas', 'check']" />
        Responsive Design
      </div>
      <div class="flex items-center gap-2">
        <font-awesome class="main-text-color w-fit" :icon="['fas', 'check']" />
        Interactive Elements
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.headline {
  position: relative;
  z-index: 2;
}
.font-yolk {
  font-family: 'TPF Yolk Bold', sans-serif;
}
.font-code-next {
  font-family: 'Code Next Book', sans-serif;
}
</style>
<style>
.price {
  height: fit-content;
  font-weight: bold;
  --bg-size: 200%;
  --color-one: rgb(17, 232, 81);
  --color-two: rgb(15, 223, 185);
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
</style>
