<template>
    <div class="about-container">
      <h1 class="about-header">Meet Our Team</h1>
      <div class="carousel">
        <div class="carousel-container">
          <div class="carousel-wrapper" ref="carousel">
            <div class="carousel-slide" v-for="(person, index) in people" :key="index">
              <div class="person-card">
                <div class="person-img-wrapper">
                  <img :src="person.image" :alt="person.name" />
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
          <button class="carousel-control" @click="prevSlide">&#9664;</button>
          <div class="carousel-dots">
            <span
              class="carousel-dot"
              v-for="(person, index) in people"
              :key="index"
              @click="currentSlide(index)"
              :class="{ active: currentSlideIndex === index }"
            ></span>
          </div>
          <button class="carousel-control" @click="nextSlide">&#9654;</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        people: [
          {
            name: "John Smith",
            title: "John Smith is an experienced marketing manager with over 10 years of experience in the industry. He has a proven track record of driving successful marketing campaigns that increase brand awareness, generate leads, and boost sales. John is a strategic thinker with a deep understanding of customer behavior and market trends. He is skilled in developing marketing plans, conducting market research, and managing cross-functional teams. In his free time, John enjoys hiking, cooking, and spending time with his family.",
            image: "https://via.placeholder.com/150",
          },
          {
            name: "Jane Smith",
            title: "CTO",
            image: "https://via.placeholder.com/150",
          },
          {
            name: "Bob Johnson",
            title: "COO",
            image: "https://via.placeholder.com/150",
          },
          {
            name: "Mary Williams",
            title: "CFO",
            image: "https://via.placeholder.com/150",
          },
        ],
        currentSlideIndex: 0,
        slideInterval: null, // holds interval for automatic movement
      };
    },
    mounted() {
      this.slideInterval = setInterval(this.nextSlide, 5000); // move to next slide every 5 seconds
    },
    beforeDestroy() {
      clearInterval(this.slideInterval); // clear interval on component destruction
    },
    methods: {
      nextSlide() {
        if (this.currentSlideIndex === this.people.length - 1) {
          this.currentSlideIndex = 0;
        } else {
          this.currentSlideIndex++;
        }
        this.moveToCurrentSlide();
      },
      prevSlide() {
        if (this.currentSlideIndex === 0) {
          this.currentSlideIndex = this.people.length - 1;
        } else {
          this.currentSlideIndex--;
        }
        this.moveToCurrentSlide();
      },
      currentSlide(index) {
        this.currentSlideIndex = index;
        this.moveToCurrentSlide();
      },
      moveToCurrentSlide() {
        const carouselWrapper = this.$refs.carousel;
        carouselWrapper.style.transform = `translateX(-${this.currentSlideIndex * 100}%)`;
      },
    },
  };
  </script>
  
  <style scoped>
  .about-container {
    min-height: 100vh;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .about-header {
    text-align: center;
    margin :10px;
    color: #FF8F52;
  font-size: 36px;
  font-weight: bold;

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
background-color: #FF8F52;
padding: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100%;
max-height: 100%;
}

.person-img-wrapper {
width: 150px;
height: 150px;
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
color: #FF8F52;
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
background-color: #FF8F52;
}
</style>