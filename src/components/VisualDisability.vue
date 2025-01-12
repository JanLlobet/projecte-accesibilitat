<template>
  <div class="visual-disability-container">
    <h1>Zona de Missió: Discapacitat Visual</h1>
    <p class="intro-text">
      Benvingut/da al nivell 1 del nostre videojoc! En aquest nivell, experimentaràs desafiaments visuals
      mentre intentes navegar pel món digital. Pots superar les barreres visuals i completar la missió?
    </p>

    <div class="mission-section">
      <h2>Missió 1: Simulació de Baixa Visió</h2>
      <p class="low-vision">
        El teu objectiu és llegir les instruccions mentre la pantalla està borrosa, replicant els efectes de baixa visió.
        Pots continuar avançant o necessites ajuda?
      </p>
    </div>

    <div class="mission-section">
      <h2>Missió 2: Ceguesa Parcial</h2>
      <p class="partial-blindness">
        Alguns elements importants han desaparegut! La ceguesa parcial crea obstacles inesperats al món digital.
        Troba el camí a la següent pantalla!
      </p>
    </div>

    <div class="mission-section">
      <h2>Missió 3: Ceguesa Total</h2>
      <p class="total-blindness">
        Tot s’ha enfosquit. Intenta avançar amb l’ajuda de pistes auditives o d’un company. Pots imaginar com és moure’t
        per un nivell completament a les fosques?
      </p>
    </div>

    <h2>Reflexió del Nivell 1</h2>
    <p class="reflection-text">
      Les barreres visuals són només un dels desafiaments que els jugadors amb discapacitat poden afrontar.
      Cada nivell t’ensenya la importància d’un disseny accessible. Estàs preparat per al següent repte?
    </p>
  </div>
</template>

<script>
export default {
  name: 'VisualDisability',
};
</script>

<style scoped>
.visual-disability-container {
  background: linear-gradient(45deg, #1d3557, #457b9d);
  color: #f1faee;
  font-family: 'Jersey 15', sans-serif;
  padding: 20px;
  border: 2px solid #a8dadc;
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 3em;
  color: #e63946;
  text-shadow: 2px 2px 5px #000;
}

h2 {
  font-size: 2em;
  color: #a8dadc;
  margin: 20px 0;
}

p {
  font-size: 1.2em;
  line-height: 1.8;
  margin: 15px 0;
}

.mission-section {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border: 2px dashed #f4a261;
  margin: 20px 0;
  border-radius: 10px;
}

.low-vision {
  filter: blur(2px);
  font-size: 1.1em;
}

.partial-blindness {
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.1em;
}

.total-blindness {
  background-color: #000;
  color: #000;
  font-size: 1.1em;
  opacity: 0.1;
}

.reflection-text {
  background-color: #2a9d8f;
  color: #000;
  padding: 15px;
  font-size: 1.3em;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
