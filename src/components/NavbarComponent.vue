<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">The Last Acces</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/visual">Missió: Barreres Visuals</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hearing">Missió: Barreres Auditives</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/motor">Missió: Barreres Motrius</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cognitive">Missió: Barreres Cognitives</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
};
</script>

<style scoped>
.navbar {
  background-color: #343a40;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  z-index: 1000;
}

.navbar-nav .nav-link {
  color: #f8f9fa !important; 
  font-size: 1.1rem; 
  padding: 12px 20px; 
  text-transform: uppercase;
  transition: color 0.3s ease, transform 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #ffcc00 !important; 
  transform: scale(1.05); 
}

.navbar.scrolled {
  background-color: #23272b !important;
}

@media (max-width: 767px) {
  .navbar-nav .nav-link {
    font-size: 1rem;
  }
}

.navbar-toggler-icon {
  background-color: #f8f9fa;
}

body {
  padding-top: 70px;
}
</style>
