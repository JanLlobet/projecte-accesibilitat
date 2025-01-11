<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">Projecte d'Accessibilitat</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/visual">Discapacitat Visual</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hearing">Discapacitat Auditiva</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/motor">Discapacitat Motriu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cognitive">Discapacitat Cognitiva</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Sobre el Projecte</router-link>
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
  background-color: #007bff;
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.nav-link {
  color: black !important;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 10px 15px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  color: red !important;
  transform: scale(1.1);
}

.navbar.navbar-light {
  background-color: #007bff;
}

.navbar.navbar-light.scrolled {
  background-color: #0056b3;
}

.navbar-toggler-icon {
  background-color: white;
}

.navbar {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-nav {
  display: flex;
  align-items: center;
}

.navbar-collapse {
  transition: all 0.3s ease;
}

body.scrolled .navbar {
  background-color: #0056b3 !important;
}

body {
  padding-top: 70px;
}

body.scrolled .navbar {
  background-color: #0056b3 !important;
}
</style>
