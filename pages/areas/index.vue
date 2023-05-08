<template>
      <AppBody>
        <div class="title-container">
            <Subtitle :text="investmentTitle" />
        </div>
    <div class="parent-component">
      <div class="grid-container">
        <!-- First AreaBadge component -->
        <AreaBadge :image="image1" :heading="heading1" :text="text1" :buttonText="buttonText1" :navigateTo="navigateTo1"/>
        
        <!-- Second AreaBadge component -->
        <AreaBadge :image="image2" :heading="heading2" :text="text2" :buttonText="buttonText2" :navigateTo="navigateTo2"/>
        
        <!-- Third AreaBadge component -->
        <AreaBadge :image="image3" :heading="heading3" :text="text3" :buttonText="buttonText3" :navigateTo="navigateTo3"/>
        
        <!-- Fourth AreaBadge component -->
        <AreaBadge :image="image4" :heading="heading4" :text="text4" :buttonText="buttonText4" :navigateTo="navigateTo4"/>
      </div>
    </div>
</AppBody>
  </template>
  
  <script>
  import AreaBadge from '../../components/AreaBadge.vue';
  
  export default {
    name: 'ParentComponent',
    components: {
      AreaBadge,
    },
    data() {
      return {
        investmentTitle: 'Areas of Investment',

        // Data for the first AreaBadge component
        image1: 'https://source.unsplash.com/user/c_v_r/1000x1000',
        heading1: 'Service',
        text1: 'At our venture capital firm, we invest in a wide range of industries and sectors, from early-stage startups to established companies with a proven track record. We are well positioned to identify and invest in the most promising opportunities across a variety of sectors. Whether youre a startup looking to disrupt a market or an established company seeking to expand, we have the knowledge, resources, and network to help you achieve your goals.',
        buttonText1: 'Discover our Service Area',
        navigateTo1: 'areas/service',
        
        // Data for the second AreaBadge component
        image2: 'https://source.unsplash.com/user/c_v_r/100x100',
        heading2: 'Health',
        text2: 'At our venture capital firm, we invest in a wide range of industries and sectors, from early-stage startups to established companies with a proven track record. We are well positioned to identify and invest in the most promising opportunities across a variety of sectors. Whether youre a startup looking to disrupt a market or an established company seeking to expand, we have the knowledge, resources, and network to help you achieve your goals.',
        buttonText2: 'Discover our Health Area',
        navigateTo2: 'areas/health',
        
        // Data for the third AreaBadge component
        image3: 'https://source.unsplash.com/user/c_v_r/100x100',
        heading3: 'Tech',
        text3: 'At our venture capital firm, we have a deep passion for technology and believe in its potential to transform the world. We invest in a broad range of technology-focused companies, from enterprise software and cloud computing to consumer electronics and e-commerce. Our team of investment professionals has a strong track record of identifying and investing in innovative startups and established companies that are driving the next wave of technological disruption.',
        buttonText3: 'Discover our Tech Area',
        navigateTo3: 'areas/tech',
        
        // Data for the fourth AreaBadge component
        image4: 'https://source.unsplash.com/user/c_v_r/1000x1000',
        heading4: 'Food',
        text4: 'At our venture capital firm, we believe that food is more than just sustenance – its an essential part of our culture, health, and wellbeing. Thats why we invest in companies that are revolutionizing the way we produce, distribute, and consume food. Our areas of focus include innovative food technology, sustainable agriculture, plant-based and alternative proteins, and more. If youre a food startup or an established company looking to transform the food industry, we would love to partner with you.',
        buttonText4: 'Discover our Food Area',
        navigateTo4: 'areas/food',
      }
    },
  }
  </script>
  
  <style scoped>
  .parent-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 52px 63px;
    justify-content: center;
  }
  </style>
  