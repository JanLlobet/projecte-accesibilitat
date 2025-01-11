<template>
    <div class="visual-disability-container">
      <h1>Discapacitat Visual</h1>
      <p>
        En aquesta pàgina, experimentareu una simulació de dificultats visuals. Podreu sentir en primera persona
        els desafiaments que moltes persones amb discapacitat visual afronten mentre naveguen per la web.
      </p>
      <h2>Simulació de Baixa Visió</h2>
      <p class="low-vision">
        Aquesta simulació redueix la visibilitat de la pàgina per replicar els efectes de la baixa visió.
        Aquesta condició pot afectar la capacitat d'una persona per llegir text i veure detalls visuals.
      </p>
  
      <h2>Simulació de Ceguesa Parcial</h2>
      <p class="partial-blindness">
        Aquesta simulació fa que certs elements de la pàgina es facin invisibles o es distorsionin,
        representant com algunes persones amb ceguesa parcial poden experimentar una pàgina web.
      </p>
  
      <h2>Simulació de Ceguesa Total</h2>
      <p class="total-blindness">
        Aquesta simulació afecta la pàgina en la seva totalitat, fent-la quasi impossible de llegir o interactuar,
        com ho faria una persona amb ceguesa total.
      </p>
  
      <h2>Reflexió sobre la discapacitat visual</h2>
      <p>
        Les dificultats visuals poden fer que accedir a continguts web sigui extremadament difícil. Aquestes simulacions
        són només una petita part del que molts usuaris amb discapacitat visual experimenten diàriament.
        És important dissenyar webs amb opcions d'accessibilitat, com el text gran o la lectura de pantalla, per millorar
        l'experiència dels usuaris amb discapacitat visual.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VisualDisability'
  };
  </script>
  
  <style scoped>
  .visual-disability-container {
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
  
  .low-vision {
    filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    margin: 10px 0;
  }
  
  .partial-blindness {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(14, 14, 14, 0.26);
    padding: 10px;
    margin: 10px 0;
  }
  
  .total-blindness {
    background-color: #000;
    color: #000;
    padding: 10px;
    margin: 10px 0;
    opacity: 0.1;
  }
  </style>
  