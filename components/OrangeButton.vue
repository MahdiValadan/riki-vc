<template>
    <button class="bg-[#FF8F52] hover:bg-[#FF6D1E] hover:shadow-md text-white font-bold py-5 px-9 rounded">
        {{ text }}
    </button>
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
