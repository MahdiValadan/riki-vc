<template>
    <h2 class="title">{{ text }}</h2>
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
  font-size: 50px;
  font-weight: 700;
  line-height: 59px;
  color: #000000;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  padding: 0.5rem 0;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  }

  .title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  </style>