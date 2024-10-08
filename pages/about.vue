<template>
  <div class="goal-container pt-5">
    <Subtitle text="Our Goals" />

    <!-- Carousel -->
    <div class="carousel">
      <div class="carousel-container">
        <div
          class="carousel-wrapper"
          ref="carousel"
        >
          <div
            class="carousel-slide"
            v-for="(person, index) in people"
            :key="index"
          >
            <div class="person-card">
              <div class="person-img-wrapper">
                <img
                  :src="person.image"
                  :alt="person.name"
                />
              </div>
              <div class="person-info">
                <h3 class="person-heading">{{ person.name }}</h3>
                <p>{{ person.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button
          class="carousel-control"
          @click="prevSlide"
        >
          &#9664;
        </button>
        <div class="carousel-dots">
          <span
            class="carousel-dot"
            v-for="(person, index) in people"
            :key="index"
            @click="currentSlide(index)"
            :class="{ active: currentSlideIndex === index }"
          >
          </span>
        </div>
        <button
          class="carousel-control"
          @click="nextSlide"
        >
          &#9654;
        </button>
      </div>
    </div>
  </div>

  <!-- Strategy -->
  <div
    id="strategy-container"
    class=" mx-10 sm:mx-28 flex flex-wrap flex-col items-center mb-16 "
  >
    <Subtitle
      class="w-fit"
      text="Our Value Creation Strategy"
    />
    <p class="text-2xl mt-6 mb-12 text-center">
      We have been active for 17 years with in-depth experience in the Italian market
    </p>

    <div class="flex flex-col items-center xl:flex-row gap-x-20 gap-y-10">
      <p class="w-full xl:w-2/5 text-base sm:text-lg">
        The Founding partners have been working together since 2006 and the Partners all together have been working
        alongside since 2016, holding 50+ cumulative years of experience in the field. The same Team has managed the
        previous initiative of RIKI.
        <br /><br />
        We follow a very proactive approach by making our experience and skills available to our portfolio companies. We
        have a “hands-on” approach, supporting the most important operational decisions at different levels of the
        company: from strategy to finance and management team selection.
      </p>
      <div class="xl:w-3/5 w-full">
        <img
          src="/images/about/strategy.jpg"
          alt="team strategy"
        />
      </div>
    </div>
  </div>
</template>
  
<script setup>

useSeoMeta({
  title: 'RIKI VC | About Us',
  description: 'About Us page of RIKI Venture Capital which gives general information about the owners of the website',
  lang: "en"
})

let people = [
  {
    name: "Increase Revenue ",
    title: " Our company aims to expand its market reach by targeting new regions, increasing brand awareness, and exploring partnerships with complementary businesses. We will develop a comprehensive marketing strategy that leverages social media, SEO, and other digital marketing channels to reach a wider audience. We will also conduct market research to understand the unique needs and preferences of customers in different regions and tailor our offerings accordingly.",
    image: "/images/about/revenue.jpg",
  },
  {
    name: "Enhance Product Quality",
    title: " We are committed to enhancing our product quality by investing in research and development, testing, and continuous improvement. We will conduct regular quality audits to identify areas for improvement and implement measures to address any quality issues promptly. Our goal is to exceed customer expectations and establish our brand as a market leader for product excellence.",
    image: "/images/about/Product-Quality.jpg",
  },
  {
    name: "Build a Strong Brand Identity",
    title: "Our company aims to build a strong brand identity by creating a consistent and compelling brand image across all touch points. We will invest in branding initiatives that align with our company values, mission, and vision. We will also foster brand loyalty by providing exceptional customer service, engaging with customers on social media, and creating memorable customer experiences.",
    image: "/images/about/brand identity.jpg",
  },
  {
    name: "Foster a Positive Company Culture",
    title: "Our company recognizes that our employees are our most valuable asset, and we aim to foster a positive company culture that promotes employee satisfaction, retention, and productivity. We will invest in employee training and development, offer competitive compensation and benefits packages, and create a work environment that fosters collaboration, innovation, and a sense of belonging. We believe that a positive company culture will result in happier, more engaged employees, and ultimately lead to better business outcomes",
    image: "/images/about/Foster-Positive.jpg",
  }
]
const carousel = ref(null)
let currentSlideIndex = ref(0)
let slideInterval = null // holds interval for automatic movement

function nextSlide() {
  if (currentSlideIndex.value === people.length - 1) {
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value++;
  }
  moveToCurrentSlide();
}
function prevSlide() {
  if (currentSlideIndex.value === 0) {
    currentSlideIndex.value = people.length - 1;
  } else {
    currentSlideIndex.value--;
  }
  moveToCurrentSlide();
}
function currentSlide(index) {
  currentSlideIndex.value = index;
  moveToCurrentSlide();
}
function moveToCurrentSlide() {
  // const carouselWrapper = this.$refs.carousel;
  if (carousel.value) {
    carousel.value.style.transform = `translateX(-${currentSlideIndex.value * 100}%)`;
  }
}

slideInterval = setInterval(nextSlide, 8000);

onBeforeUnmount(() => {
  clearInterval(slideInterval); // clear interval on component destruction
})

</script>

<style scoped>
.goal-container {
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel {
  width: 100%;
  max-width: 100%;
  margin: 2rem 0;
  position: relative;
}

.carousel-container {
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
}

.person-heading {
  margin-bottom: 24px;
  font-size: 36px;
}

.person-card {
  width: 100%;
  background-color: #0e7490;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 100%;
}

.person-img-wrapper {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
}

.person-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.person-info {
  text-align: center;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.carousel-control {
  font-size: 2rem;
  color: #0e7490;
  /* background-color: white; */
  border: none;
  cursor: pointer;
  padding: 1rem;
  margin: 0 0.5rem;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
  background-color: #C4C4C4;
  transition: background-color 0.3s ease-in-out;
}

.carousel-dot.active {
  background-color: #0e7490;
}

</style>