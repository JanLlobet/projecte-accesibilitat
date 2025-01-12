<template>
  <div class="motor-disability-container container mt-5">
    <h1 class="text-center text-warning">Missió Impossible: Discapacitat Motriu</h1>
    <p class="lead text-center">
      En aquest desafiament, el control del desplaçament es farà completament erràtic mentre l'intentes utilitzar. 
      Aquests tipus d'efectes poden ser una gran barrera per a les persones amb discapacitat motriu, que tenen dificultats per controlar amb precisió els elements interactius.
    </p>

    <div class="slider-section">
      <h2 class="text-center text-light">Intenta controlar el desplaçament</h2>
      <label for="slider" class="text-light">Desplaça el control i observa el comportament erràtic:</label>
      <input type="range" id="slider" class="slider form-control-range mb-4" min="0" max="100" step="1" />
    </div>

    <div class="button-section">
      <button class="btn btn-danger btn-lg w-50 mx-auto d-block" id="actionButton">Premeu per a més acció!</button>
    </div>

    <h2 class="text-center text-light mt-5">Reflexió sobre la discapacitat motriu</h2>
    <p class="text-center text-light">
      Les persones amb discapacitat motriu poden trobar una gran dificultat en interactuar amb elements de la pàgina com aquest control de desplaçament. 
      Quan el comportament de la pàgina és erràtic o poc fiable, la tasca d'interactuar amb els elements es fa gairebé impossible.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MotorDisability',
  mounted() {
    const button = document.getElementById('actionButton');
    button.classList.add('erratic');
  },
};
</script>

<style scoped>
.motor-disability-container {
  font-family: 'Jersey 15', sans-serif;
  background: linear-gradient(45deg, #ff4b2b, #ff416c);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  position: relative;
}

h1 {
  font-size: 2.8em;
  text-shadow: 3px 3px 5px #000;
}

h2 {
  font-size: 2.2em;
}

p {
  font-size: 1.4em;
  line-height: 1.8;
  margin: 20px 0;
}

.slider-section {
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 12px;
  border: 2px dashed #ffdd57;
}

.slider {
  width: 80%;
  margin-top: 20px;
  background-color: #ff006e;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider:hover {
  background-color: #ff00ff;
}

.slider:active {
  animation: erraticMove 0.1s infinite ease-in-out;
}

@keyframes erraticMove {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(50px) translateY(20px);
  }
  20% {
    transform: translateX(-30px) translateY(-40px);
  }
  30% {
    transform: translateX(150px) translateY(80px);
  }
  40% {
    transform: translateX(-120px) translateY(-90px);
  }
  50% {
    transform: translateX(60px) translateY(50px);
  }
  60% {
    transform: translateX(180px) translateY(-70px);
  }
  70% {
    transform: translateX(-150px) translateY(40px);
  }
  80% {
    transform: translateX(130px) translateY(-120px);
  }
  90% {
    transform: translateX(-90px) translateY(60px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

.button-section {
  margin-top: 50px;
}

#actionButton {
  transition: transform 0.2s ease;
  pointer-events: auto;
}

#actionButton.erratic {
  animation: erraticMoveButton 1s infinite ease-in-out;
  pointer-events: none;
}

@keyframes erraticMoveButton {
  0% {
    transform: translateX(0) translateY(0);
  }
  10% {
    transform: translateX(50px) translateY(40px);
  }
  20% {
    transform: translateX(-50px) translateY(-30px);
  }
  30% {
    transform: translateX(200px) translateY(150px);
  }
  40% {
    transform: translateX(-180px) translateY(-130px);
  }
  50% {
    transform: translateX(100px) translateY(100px);
  }
  60% {
    transform: translateX(250px) translateY(-150px);
  }
  70% {
    transform: translateX(-220px) translateY(90px);
  }
  80% {
    transform: translateX(180px) translateY(-180px);
  }
  90% {
    transform: translateX(-150px) translateY(120px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

#actionButton:hover {
  transform: scale(1.2);
  box-shadow: 0px 0px 10px 3px rgba(255, 0, 0, 0.5);
}
</style>
