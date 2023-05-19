<template>
  <div class="contact-us-container">
    <div class="flex gap-10 flex-col items-center justify-center w-full sm:flex-row mt-5 mb-7">
      <div class="contact-info justify-center items-center">
        <Subtitle class="w-fit mt-1 mb-8" text="Contact Us" />

        <div class="address-container w-full">
          <div class="address-icon">
            <i class="material-icons">location</i>
          </div>
          <div class="address-text">
            <p class="address-line">26985 Brighton Lane,</p>
            <p class="address-line">Lake Forest</p>
            <p class="address-line"> CA 94111</p>
          </div>
        </div>
        <div class="phone-container w-full">
          <div class="phone-icon">
            <i class="material-icons">phone</i>
          </div>
          <div class="phone-text">
            <p class="phone-line">(123) 456-7890</p>
            <p class="phone-line">(123) 456-7891</p>
          </div>
        </div>
        <div class="email-container w-full">
          <div class="email-icon">
            <i class="material-icons">email</i>
          </div>
          <div class="email-text">
            <p class="email-line">info@rikivc.com</p>
            <p class="email-line">support@rikivc.com</p>
          </div>
        </div>
      </div>
      <div class="contact-image">
        <img src="/images/people/contact.jpg" alt="contact-image">
      </div>
    </div>

    <Subtitle text="Our Map Location" />
    <div class="map-container my-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0448120407857!2d9.226574815567695!3d45.47891207910196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4346202a9f7e4a4!2sPolitecnico%20di%20Milano%20-%20Campus%20di%20Leonardo!5e0!3m2!1sen!2sus!4v1652118318228!5m2!1sen!2sus&amp;markers=color:red%7C45.47891207910196,9.226574815567695"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

    </div>
    <div class="form-container">

      <Subtitle text="Send us a Message" />
      <form class="contact-us-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <div class="form-actions">
          <button class="submit-button" type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactUsPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      },
    };
  },
  methods: {
    handleSubmit() {
      alert("Message sent successfully! You'll get response soon!")
    }
  }
};
</script>
<style scoped>
.contact-us-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
}

.contact-info {
  display: flex;
  flex-direction: column;
}



.our-map-heading {
  /* margin-bottom: 24px;
  color: #FF8F52;
  font-size: 36px; */
}


.address-container,
.phone-container,
.email-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
}

.address-icon,
.phone-icon,
.email-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  height: 132px;
  width: 132px;
  border-radius: 50%;
  background-color: #FF8F52;
}

.material-icons {
  font-size: 22px;
  vertical-align: middle;
  margin-right: 8px;
  color: #FF8F52;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

}

.address-icon i,
.phone-icon i,
.email-icon i {
  color: #FFFFFF;
}

.address-text,
.phone-text,
.email-text {
  display: flex;
  flex-direction: column;
}

.address-line,
.phone-line,
.email-line {
  margin: 0;
  color: #424242;
}

.contact-image {
  margin-left: 24px;
}

.map-container {
  margin-bottom: 24px;
  width: 100%;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #F5F5F5;
  padding: 24px;
  border-radius: 8px;
}

.form-heading {
  /* margin-bottom: 24px;
  color: #FF8F52;
  font-size: 24px; */
}

.contact-us-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 16px;
}

label {
  margin-bottom: 8px;
  color: #424242;
}

input,
textarea {
  padding: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
  background-color: #FFFFFF;
  font-size: 16px;
  color: #424242;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  padding: 12px 24px;
  background-color: #FF8F52;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #FF6F00;
}
</style>
  