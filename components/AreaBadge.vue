<template>
  <div class="child-component">
    <div class="image-container">
      <img :src="image" alt="Image"/>
      <h2>{{ heading }}</h2>
    </div>
    <div class="text-container">
      <p>{{ text }}</p>
    </div>
    <button @click="navigateToPage">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    image: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    navigateTo: {
      type: String,
      required: true,
    },
  },
  methods: {
    navigateToPage() {
      this.$router.push(this.navigateTo); // navigate to the destination page
    }
  }
}
</script>

<style scoped>
.child-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px; */
  border-radius: 5px;
  background-color: #FF8F52;
}
.image-container {
  position: relative;
  width: 579px;
  height: 800px;
  border-radius: 5px;
}
img {
  position: relative;
  width: 579px;
  height: 800px;
  border-radius: 5px;
}
h2 {
  /* position: absolute; */
  margin-top: 20px;
  margin-bottom: 20px;
  left: 0;
  width: 100%;
  text-align: left;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  backdrop-filter: blur(2px);
}
 .text-container {
    margin-top: 60px;
    display: flex;
    padding-inline: 10px;
    justify-content: normal;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #FFFFFF;
    border-radius: 5px;
  }
  p {
    text-align: center;
  }
  button {
    margin-top: 21px;
    position: relative;
    margin-right: 23px;
    margin-bottom: 25px;
    padding: 10px 20px;
    align-self: last baseline;
    border: none;
    border-radius: 5px;
    background-color: #838383;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
  }
</style>