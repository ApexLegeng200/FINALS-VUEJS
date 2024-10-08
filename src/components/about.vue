<template>
  <div class="about">
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
    <h2 class="text-center">About Hirono</h2> 
    
    <div class="card image-wrapper shadow">
      <img 
        :src="require('../assets/BGHIRO.jpg')" 
        alt="About Hirono"
        class="img-fluid rounded"
      />
    </div>

    <div class="card text-center mt-4 shadow">
      <div class="card-body">
        <p class="lead">{{ msg }}</p> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      msg: 'From adorable creatures to iconic figures, each blind box offers an exciting voyage of discovery for collectors of all ages. Join us as we explore the magic of Hirono, where the joy of collecting knows no bounds.' 
    };
  },
};
</script>

<style scoped>
.about {
  background-color: #f5f5f5; 
  padding: 20px;
  min-height: 100vh; 
}

.image-wrapper {
  position: relative;
  width: 100%; 
  overflow: hidden;
  height: 300px; 
  border-radius: 10px;
}

.image-wrapper img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  border-radius: 10px; 
}

.card {
  background-color: #fff; 
  border-radius: 10px; 
  border: none; 
}

.card .lead {
  font-size: 1.25rem; 
  font-weight: 300; 
  margin: 0; 
}

.text-center {
  text-align: center; 
}
</style>
