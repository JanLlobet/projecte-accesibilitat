<template>
    <div class="hearing-disability-container">
      <h1>Discapacitat Auditiva</h1>
      <p>
        En aquesta pàgina, experimentareu una simulació de dificultats auditives. Les persones amb discapacitat auditiva poden
        trobar dificultats per accedir a continguts web que depenen del so, com vídeos o àudios sense subtítols.
      </p>
      
      <h2>Simulació de Pèrdua Auditiva Parcial</h2>
      <p class="partial-hearing-loss">
        Aquesta simulació redueix el volum de l'àudio per replicar els efectes de la pèrdua auditiva parcial. Les persones amb
        aquest tipus de discapacitat poden escoltar sons, però sovint els perceben de manera distorsionada o amb dificultats.
      </p>
  
      <h2>Simulació de Pèrdua Auditiva Total</h2>
      <p class="total-hearing-loss">
        Aquesta simulació desactiva el so completament per mostrar com seria la interacció amb una pàgina web que depèn totalment
        de l'audio, sense opcions de subtítols ni transcripcions.
      </p>
  
      <h2>Contingut en Vídeo Sense Subtítols</h2>
      <p class="video-without-subtitles">
        Aquest vídeo no té subtítols. Això pot ser una barrera per a les persones amb discapacitat auditiva, que no poden entendre el contingut
        sense un suport visual com els subtítols.
      </p>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cumJhlQMseY?si=RIZ42hNiBTsi-b69" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
      <h2>Reflexió sobre la discapacitat auditiva</h2>
      <p>
        Les persones amb discapacitat auditiva poden trobar barreres significatives quan no hi ha subtítols o transcripcions disponibles.
        És essencial proporcionar opcions accessibles, com subtítols en vídeos o contingut alternatiu per a l'àudio.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HearingDisability'
  };
  </script>
  
  <style scoped>
  .hearing-disability-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 2.5em;
    color: #333;
    text-align: center;
  }
  
  h2 {
    font-size: 1.8em;
    color: #444;
  }
  
  p {
    font-size: 1.2em;
    line-height: 1.6;
    color: #666;
  }
  
  .partial-hearing-loss {
    filter: brightness(0.5); /* Simulació de pèrdua auditiva parcial, baixa el contrast per simular dificultats d'escolta */
    padding: 10px;
    margin: 10px 0;
  }
  
  .total-hearing-loss {
    filter: brightness(0); /* Simulació de pèrdua auditiva total, fa el text i contingut menys visible, representant la manca de so */
    color: transparent;
    padding: 10px;
    margin: 10px 0;
  }
  
  .video {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
  }
  
  .video-without-subtitles {
    background-color: #f0f0f0;
    padding: 10px;
    margin: 10px 0;
    font-style: italic;
  }
  </style>
  