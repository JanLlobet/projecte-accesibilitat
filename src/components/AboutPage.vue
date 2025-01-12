<template>
  <div class="game-themed-container">
    <h1 class="game-title">Missió: Inclusió</h1>
    <p class="intro-text">
      Uneix-te a una èpica aventura on exploraràs les barreres que molts herois han de superar per dominar el món
      digital.
      Descobreix com les discapacitats visuals, auditives, motrius i cognitives poden transformar l'experiència de
      navegació.
    </p>

    <div class="game-buttons">
      <router-link to="/visual" class="game-btn">Nivell 1: Barreres Visuals</router-link>
      <router-link to="/hearing" class="game-btn">Nivell 2: Barreres Auditives</router-link>
      <router-link to="/motor" class="game-btn">Nivell 3: Barreres Motrius</router-link>
      <router-link to="/cognitive" class="game-btn">Nivell 4: Barreres Cognitives</router-link>
    </div>

    <div class="game-story">
      <h2 class="game-title">La teva Missió</h2>
      <p class="game-paragraph">
        Ets un heroi que busca restaurar l'harmonia al món digital. Per aconseguir-ho, hauràs de superar diferents
        obstacles que simbolitzen les barreres d'accessibilitat. Cada nivell et posarà a prova i et farà reflexionar
        sobre
        com es pot construir un món digital més inclusiu.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.game-themed-container {
  background-size: cover;
  color: #fefefe;
  font-family: 'Jersey 15', sans-serif;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.game-title {
  font-size: 3em;
  color: #ffcc00;
  text-shadow: 2px 2px 5px #000;
  margin-bottom: 20px;
}

.intro-text {
  font-size: 1.2em;
  line-height: 1.6;
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.game-buttons {
  margin: 20px 0;
}

.game-btn {
  display: inline-block;
  padding: 15px 20px;
  margin: 10px;
  font-size: 1.2em;
  color: #fff;
  background-color: #ff4500;
  border: 2px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.game-btn:hover {
  background-color: #ff6347;
  transform: scale(1.1);
  text-shadow: 1px 1px 4px #000;
}

.game-story {
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: #ddd;
}

.game-story h2 {
  color: #86efac;
  text-shadow: 1px 1px 3px #000;
  margin-bottom: 15px;
}

.game-paragraph {
  font-size: 1.1em;
  line-height: 1.8;
}
</style>
