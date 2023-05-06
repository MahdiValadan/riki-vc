<template>
    <button class="bg-[#FF8F52] hover:bg-[#FF6D1E] hover:shadow-md text-white font-bold py-5 px-9 rounded" @click="goToLink">
        {{ buttonText }}
    </button>
  </template>

<script>
export default {
  props: {
    link: {
        type: String,
        required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    goToLink() {
        window.location.href = this.link;
    }
  }
}
</script>
