<template>
    <div class="cognitive-disability-container">
      <h1>Discapacitat Cognitiva</h1>
      <p>
        En aquesta pàgina, experimentareu una simulació de dificultats cognitives. Les persones amb discapacitat cognitiva poden tenir
        dificultats per processar i comprendre la informació, mantenir l'atenció, o recordar instruccions. 
        A través d'aquestes simulacions, busquem mostrar com aquestes dificultats poden afectar la navegació en un lloc web.
      </p>
  
      <h2>Simulació de Sobrecàrrega d'Informació</h2>
      <p class="overload-information">
        Aquesta simulació afegeix massa informació a la pàgina per representar la sobrecàrrega d'informació. Una persona amb discapacitat cognitiva
        pot tenir dificultats per procesar grans quantitats de text o instruccions en una sola pàgina, provocant confusió.
      </p>
  
      <h2>Simulació de Text Complex</h2>
      <p class="complex-text">
        Aquesta simulació utilitza text més difícil de comprendre per imitar com una persona amb dificultats cognitives pot tenir problemes
        per seguir les instruccions en un lloc web si el llenguatge és massa complex.
      </p>
  
      <h2>Simulació de Distraccions Visuals</h2>
      <p class="visual-distractions">
        Aquesta simulació afegeix elements visuals que poden distreure l'usuari i dificultar l'atenció a la informació principal de la pàgina.
        Les persones amb discapacitat cognitiva poden tenir dificultats per mantenir l'atenció en una tasca o informació a causa de les distraccions.
      </p>
  
      <h2>Reflexió sobre la discapacitat cognitiva</h2>
      <p>
        Les persones amb discapacitat cognitiva necessiten webs amb informació clara, ben estructurada i fàcil de seguir. La sobrecàrrega d'informació
        o el llenguatge complex poden ser barreres importants per a ells. És essencial utilitzar un disseny senzill i proporcionar opcions per personalitzar
        l'experiència.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CognitiveDisability'
  };
  </script>
  
  <style scoped>
  .cognitive-disability-container {
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
  
  .overload-information {
    background-color: rgba(255, 0, 0, 0.1); /* Color de fons per indicar la sobrecàrrega d'informació */
    padding: 10px;
    margin: 10px 0;
    text-align: center;
    font-style: italic;
  }
  
  .complex-text {
    font-size: 1.1em;
    line-height: 1.8;
    font-family: 'Courier New', monospace; /* Simula el text més difícil de llegir */
    color: #888;
    background-color: rgba(0, 255, 0, 0.1); /* Simula la dificultat per llegir text complex */
    padding: 10px;
    margin: 10px 0;
  }
  
  .visual-distractions {
    background-color: rgba(255, 255, 0, 0.1); /* Simulació de distracció visual */
    padding: 10px;
    margin: 10px 0;
    text-align: center;
  }
  
  @keyframes flicker {
    0% { background-color: rgba(255, 255, 0, 0.1); }
    50% { background-color: rgba(255, 255, 0, 0.5); }
    100% { background-color: rgba(255, 255, 0, 0.1); }
  }
  
  .visual-distractions {
    animation: flicker 1s infinite;
  }
  
  </style>
  