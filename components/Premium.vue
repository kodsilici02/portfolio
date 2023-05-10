<template>
  <div class="w-full h-full">
    <div class="flex justify-between">
      <div class="text-4xl font-yolk heading">Premium Pack</div>
      <div class="text-4xl price">500$</div>
    </div>
    <div class="font-code-next mt-3">10-15 Pages WebSite</div>
    <div class="main-text-color mt-3 flex gap-2 items-center">
      <font-awesome :icon="['fas', 'clock']" />
      <div>30 Days Delivery</div>
      <font-awesome class="ml-3" :icon="['fas', 'arrow-rotate-right']" />
      <div>5 Revision</div>
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
      <div class="flex items-center gap-2">
        <font-awesome class="main-text-color w-fit" :icon="['fas', 'check']" />
        Content Upload
      </div>
      <div class="flex items-center gap-2">
        <font-awesome class="main-text-color w-fit" :icon="['fas', 'check']" />
        Dynamic Pages
      </div>
      <div class="flex items-center gap-2">
        <font-awesome class="main-text-color w-fit" :icon="['fas', 'check']" />
        Customizable
      </div>
      <div class="flex items-center gap-2">
        <font-awesome class="main-text-color w-fit" :icon="['fas', 'check']" />
        Source Code
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.heading {
  background: linear-gradient(to right, rgb(42, 232, 17), #14e8c8, rgb(10, 222, 226), rgb(14, 153, 192), rgb(9, 221, 115));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 400% auto;
  animation: textShine 5s ease-in-out infinite;
}

@keyframes textShine {
  0% {
    background-position: 400% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
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
.font-yolk {
  font-family: 'TPF Yolk Bold', sans-serif;
}
.font-code-next {
  font-family: 'Code Next Book', sans-serif;
}
</style>
