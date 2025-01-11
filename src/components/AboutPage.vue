<template>
  <div class="container mt-5">
    <h1>Sobre el Projecte</h1>
    <p>
      Aquest projecte té com a objectiu sensibilitzar als usuaris sense discapacitat sobre les barreres d'accessibilitat
      que poden afectar les persones amb discapacitat en el món digital. A través d'experiments interactius en aquest lloc web,
      els usuaris podran viure les dificultats que les persones amb discapacitat visual, auditiva, motriu i cognitiva poden experimentar
      al navegar per internet.
    </p>
    <p>
      El lloc web presenta una sèrie de simulacions que permeten als usuaris sense discapacitat sentir en primera persona
      les dificultats d'accés a la tecnologia que tenen les persones amb discapacitat. Els usuaris podran navegar a través de barreres de
      contingut, disseny, i interacció, les quals són habituals per a aquelles persones que tenen algun tipus de discapacitat.
    </p>
<!--     
    <h2>Les Barreres d'Accés Implementades</h2>
    <p>
      En aquest lloc web, hem implementat diverses barreres d'accessibilitat que simulen les dificultats que poden tenir les persones amb diferents tipus de discapacitat:
    </p>
    <ul>
      <li><strong>Discapacitat Visual:</strong> Simulacions de ceguesa total i baixa visibilitat.</li>
      <li><strong>Discapacitat Auditiva:</strong> Simulacions de pèrdua auditiva parcial o total.</li>
      <li><strong>Discapacitat Motriu:</strong> Barreres per a l'ús del ratolí i la interacció amb el teclat.</li>
      <li><strong>Discapacitat Cognitiva:</strong> Dificultats per entendre el contingut i la interacció amb el lloc web.</li>
    </ul> -->

    <h2>Reflexió del Projecte</h2>
    <p>
      Aquest projecte ha estat dissenyat amb l'objectiu de sensibilitzar i educar a la comunitat sobre la importància de l'accessibilitat
      web. Ens hem adonat de la gran diferència que existeix entre les persones amb discapacitat i les que no tenen cap mena de dificultat
      per navegar, i hem après com petites millores poden transformar l'experiència digital per a moltes persones.
    </p>

    <p>
      Esperem que aquest projecte ajudi a augmentar la consciència sobre la necessitat d'un disseny web inclusiu i accessible per a tots.
    </p>
  </div>

</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8em;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  font-size: 1.1em;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }
}
</style>
