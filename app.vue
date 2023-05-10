<template>
  <NuxtLayout @scrollToLayout="scrollTo" name="default">
    <NuxtPage @scrollData="getData"></NuxtPage>
  </NuxtLayout>
</template>
<script setup>
const scrollTo = to => {
  datas.value.forEach(element => {
    if (element.name == to) {
      window.scrollTo({
        top: element.top - 100,
        behavior: 'smooth'
      })
    }
  })
}
const datas = ref(null)
const getData = data => {
  datas.value = data
}
</script>
