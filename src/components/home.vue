<template>
  <div class="home">
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
    <h2 class="text-center">Little Mischief & The Other One</h2>
    
    <div class="d-flex flex-column align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <div class="card mx-2 shadow custom-card">
          <img 
            :src="require('../assets/grump.jpg')"  
            alt="Left Image"
            class="card-img-top rounded" 
            style="max-width: 250px; height: auto;"
          >
        </div>
        
        <div class="card mx-2 shadow custom-card">
          <img 
            :src="require('../assets/liar.jpg')" 
            alt="Hirono Figurine" 
            class="card-img-top rounded" 
            style="max-width: 300px; height: auto;" 
          >
        </div>
        
        <div class="card mx-2 shadow custom-card">
          <img 
            :src="require('../assets/okihi.jpg')" 
            alt="Right Image"
            class="card-img-top rounded" 
            style="max-width: 250px; height: auto;"
          >
        </div>
      </div>
      <div class="card text-center mt-4 shadow custom-card">
        <div class="card-body">
          <p class="lead">{{ msg }}</p> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Step into the wonderful world of Hirono Blind Boxes Collectibles, where anticipation meets excitement with every unboxing. These tiny treasures hold an array of surprises, featuring a variety of exquisitely designed characters and themes.' 
    };
  },
};
</script>

<style scoped>
.home {
  background-color: #f5f5f5; 
  padding: 20px; 
  min-height: 100vh; 
}

.custom-card {
  background-color: #e9ecef; 
  transition: background-color 0.3s, transform 0.2s; 
  border-radius: 10px; 
}

.custom-card:hover {
  background-color: #d1e7dd; 
  transform: scale(1.05);
}

.lead {
  font-size: 1.25rem; 
  font-weight: 300; 
}
</style>
