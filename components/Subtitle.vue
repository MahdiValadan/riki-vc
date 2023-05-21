<template>
  <h2
    class="font-bold text-3xl sm:text-4xl leading-tight text-black border-t-2 border-b-2 border-black py-2 text-center mt-6 mb-6"
  >
    {{ text }}
  </h2>
</template>
  
<script setup>
let props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>