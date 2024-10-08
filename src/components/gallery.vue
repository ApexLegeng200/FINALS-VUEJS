<template>
    <div class="gallery">
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
      <h2 class="text-center">Gallery</h2>
  

      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="image in images" :key="image.id">
            <div class="card shadow-sm img-card">
              <img :src="require(`../assets/${image.src}`)" class="card-img-top" :alt="image.alt">
              <div class="overlay">
                <div class="text">{{ image.alt }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'gallery',
    data() {
      return {
        images: [
          { id: 1, src: 'HIR1.jpg', alt: 'Fallen Angel' },
          { id: 2, src: 'HIR2.jpg', alt: 'Manacle & Prison' },
          { id: 3, src: 'HIR3.jpg', alt: 'Float' },
          { id: 4, src: 'HIR4.jpg', alt: 'Drifter' },
          { id: 5, src: 'HIR5.jpg', alt: 'Destroyer' },
          { id: 6, src: 'HIR6.jpg', alt: 'Voyage' },
          { id: 7, src: 'HIR7.jpg', alt: 'Cabin' },
          { id: 8, src: 'HIR8.jpg', alt: 'Aviator' },
          { id: 9, src: 'HIR9.jpg', alt: 'Fool' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    background-color: #f8f9fa;
    padding: 20px;
    min-height: 100vh;
  }
  
  .card {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease-in-out; 
  }
  
  .card-img-top:hover {
    transform: scale(1.08);
  }
  
  .img-card {
    position: relative;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .img-card:hover .overlay {
    opacity: 1; 
  }
  
  .text {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .text-center {
    margin-bottom: 20px;
  }
  </style>
  