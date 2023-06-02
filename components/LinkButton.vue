<template>
  <NuxtLink
    class="bg-[#0e7490] hover:bg-[#06b6d4] transition-all	hover:shadow-md text-base sm:text-lg
          text-white text-center font-bold py-2 px-3 rounded"
    :to="link"
  >
    {{ buttonText }}
  </NuxtLink>
</template>

<script setup>

let props = defineProps({
  // the link where you want to go to
  link: {
    type: String,
    required: true
  },
  // the text to show in the button
  buttonText: {
    type: String,
    required: true
  }
})

</script>
