<template>
  <h2 class="flex flex-col justify-center text-2xl leading-tight text-black border-t-2
  border-b-2 border-black text-center mt-10 mb-10">
    {{ text }}
  </h2>
</template>
  
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>