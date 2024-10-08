<template>
    <div class="contact">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Hirono</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/gallery">Gallery</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <br>
      <h2 class="text-center">Contact Us</h2>
  
      <!-- Contact form section -->
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card shadow-sm p-4">
              <h4 class="text-center mb-4">Get in Touch</h4>
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    class="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    class="form-control"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-dark w-100">Send Message</button>
              </form>
            </div>
          </div>
  
          <div class="col-lg-6 mb-4">
            <div class="card shadow-sm">
              <div class="map-wrapper">
                <iframe
                  class="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094746!2d144.955928315319!3d-37.81720997975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f2b0b3e8b441!2sFederation%20Square%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1635057464967!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Message sent!\nName: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`);
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact {
    background-color: #f8f9fa;
    padding: 20px;
    min-height: 100vh;
  }
  
  .card {
    border-radius: 10px;
    border: none;
  }
  
  .map-wrapper {
    overflow: hidden;
    border-radius: 10px;
  }
  
  .map {
    border: none;
    width: 100%;
    height: 350px;
    border-radius: 10px;
  }
  
  .text-center {
    margin-bottom: 20px;
  }
  
  .btn {
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #343a40;
  }
  </style>
  