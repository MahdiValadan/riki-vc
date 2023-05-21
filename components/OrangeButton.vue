<template>
  <NuxtLink
    class="bg-[##f97316] hover:bg-[#FF6D1E] transition-all	hover:shadow-md text-white font-bold py-2 px-3 rounded"
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
