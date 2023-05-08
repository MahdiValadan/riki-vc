<template> <AppBody>
    <div class="white-rectangle">
      <div class="content">
        <h2 class="heading">Tech</h2>
        <p class="text">At our venture capital firm, we have a deep passion for technology and believe in its potential to transform the world. We invest in a broad range of technology-focused companies, from enterprise software and cloud computing to consumer electronics and e-commerce. Our team of investment professionals has a strong track record of identifying and investing in innovative startups and established companies that are driving the next wave of technological disruption.
</p>
        <button class="button">Discover our Tech Projects</button>
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