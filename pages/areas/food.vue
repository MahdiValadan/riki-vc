<template> <AppBody>
    <div class="white-rectangle">
      <div class="content">
        <h2 class="heading">Food</h2>
        <p class="text">At our venture capital firm, we believe that food is more than just sustenance – its an essential part of our culture, health, and wellbeing. Thats why we invest in companies that are revolutionizing the way we produce, distribute, and consume food. Our areas of focus include innovative food technology, sustainable agriculture, plant-based and alternative proteins, and more. If youre a food startup or an established company looking to transform the food industry, we would love to partner with you.</p>
        <button class="button">Discover our Food Projects</button>
        <img class="image" src="https://via.placeholder.com/500x500" alt="Example Image">
      </div>
    </div>
</AppBody>
  </template>
  
  <script>
  export default {
    name: 'WhiteRectangle',
  };
  </script>
  
  <style scoped>
  .white-rectangle {
    background-color: #FFFFFF;
    padding-top: 16px;
    border-radius: 5px;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .heading {
    margin-left: 33px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 25.78px;
    color: #000000;
  }
  
  .text {
    margin-left: 33px;
    margin-right: 33px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: #838383;
;
  }
  
  .button {
    margin-top: 37px;
    margin-bottom: 46px;
    margin-right: 33px;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    background-color: #FF8F52;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
    align-self:last baseline;
  }
  
  .image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }
  </style>