<template>
  <div class="hearing-disability-container">
    <h1>Zona de Missió: Clàssics Memorables</h1>
    <p class="hidden-text">
      "The Legend of Zelda: Breath of the Wild" redefineix el gènere dels jocs d'aventura amb un món obert impressionant,
      mecàniques de joc creatives i una llibertat sense precedents per explorar. És un autèntic clàssic que ha inspirat
      una nova generació de videojocs.
    </p>
    <p class="hidden-text">
      "Super Mario 64" és el pioner dels jocs de plataformes en 3D, oferint un disseny de nivells brillant, controls intuïtius 
      i una experiència que va marcar una fita en la història dels videojocs. Va establir un nou estàndard per a les aventures tridimensionals.
    </p>
    <p class="hidden-text">
      "Final Fantasy VII" va revolucionar els jocs de rol amb una narrativa emocional i cinemàtica, personatges memorables i un sistema de combat únic. 
      És una obra mestra que ha deixat una empremta duradora en el cor de milions de jugadors.
    </p>
    <p class="hidden-text">
      "Tetris" és senzill però addictiu, una obra d'enginy que ha captivat jugadors de totes les edats des de la seva creació. 
      El seu concepte intemporal de blocs encaixant-se perfectament és la prova que menys pot ser més en el món dels videojocs.
    </p>
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/jk6NF0R40lU?si=4HmmyG6-qZfYxnIO" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'HearingDisability',
};
</script>

<style scoped>
.hearing-disability-container {
  background: linear-gradient(45deg, #3a0ca3, #4361ee);
  color: #f1faee;
  font-family: 'Jersey 15', sans-serif;
  padding: 20px;
  border: 2px solid #4895ef;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 3em;
  color: #ffbe0b;
  text-shadow: 2px 2px 5px #000;
}

.hidden-text {
  color: #3a0ca3;
  background: #3a0ca3;
  font-size: 1.2em;
  line-height: 1.8;
  margin: 20px 0;
}

iframe {
  margin-top: 20px;
  border: 2px solid #90e0ef;
  border-radius: 8px;
}
</style>
