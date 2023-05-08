<template>
    <button class="bg-[#FF8F52] hover:bg-[#FF6D1E] hover:shadow-md text-white font-bold py-5 px-9 rounded" @click="goToLink">
        {{ buttonText }}
    </button>
  </template>

<script>
export default {
  props: {
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
  },
  methods: {
    goToLink() {
        window.location.href = this.link;
    }
  }
}
</script>
