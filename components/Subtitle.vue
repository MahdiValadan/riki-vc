<template>
    <h2 class="font-roboto font-bold text-5xl leading-tight text-black border-t-2 border-b-2 border-black py-2 text-center mt-10 mb-10">{{ text }}</h2>
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
  
  <style>
  .title {
  font-family: 'Roboto', sans-serif;
  }

  .title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  </style>