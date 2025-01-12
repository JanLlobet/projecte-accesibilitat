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
/* Barra de navegació millorada amb Bootstrap */
.navbar {
  background-color: #343a40; /* Fons fosc per contrastar millor amb el text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Afegeix una ombra suau */
  z-index: 1000;
}

.navbar-nav .nav-link {
  color: #f8f9fa !important; /* Color clar per al text */
  font-size: 1.1rem; /* Mida de text ajustada */
  padding: 12px 20px; /* Espai més ample per a una millor llegibilitat */
  text-transform: uppercase;
  transition: color 0.3s ease, transform 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #ffcc00 !important; /* Color groc per a l'efecte hover */
  transform: scale(1.05); /* Efecte de zoom per a més interacció */
}

/* Barra de navegació quan es fa scroll */
.navbar.scrolled {
  background-color: #23272b !important; /* Fons més fosc quan es fa scroll */
}

/* Millora la visibilitat en pantalles petites */
@media (max-width: 767px) {
  .navbar-nav .nav-link {
    font-size: 1rem; /* Mida de text una mica més petita en pantalles petites */
  }
}

.navbar-toggler-icon {
  background-color: #f8f9fa; /* Canvia l'icona de la hamburguesa a un color més clar */
}

/* Ajusta la posició del contingut per evitar que quedi cobert per la barra fixa */
body {
  padding-top: 70px;
}
</style>
