<template>
  <div class="cognitive-disability-container">
    <h1>Enemics Memorables dels Videojocs</h1>
    <p>
      Bowser, el temible rei dels Koopas, és un dels enemics més emblemàtics de la història dels videojocs. Com a
      principal antagonista de la saga Super Mario, Bowser ha desafiat Mario i els seus amics en nombrosos jocs amb la
      seva enorme força i habilitat per crear caos al Regne dels Bolets.
    </p>
    <img
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3RscDd5Mmd0enZ1bWlzM2hwYmE3OHRzbWN4czMyaWZnbjAzOXBzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iWT9IGS6f2rfbWbk7w/giphy.webp"
      alt="Bowser" class="enemy-image">

    <p>
      GLaDOS és l'intel·ligent i sarcàstica intel·ligència artificial que dirigeix els experiments en el joc Portal. Tot
      i la seva aparença freda i lògica, GLaDOS es converteix en un enemic psicològic que crea una tensió constant
      mentre l'usuari avança a través dels laberints de portal.
    </p>
    <img
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXdwcHR5dGZqbDE4dGU4eW5ncjBtb28wNm80bmZ5bmpseGJvaWJwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ltIEltsVmeFcA/giphy.webp"
      alt="GLaDOS" class="enemy-image">

    <p>
      Els Clickers, de The Last of Us, són una de les creacions més terrorífiques dels videojocs. Aquestes criatures
      cegues pel fong cordyceps, fan un soroll característic de "clics" i es desplacen de manera inesperada, provocant
      una gran tensió i por en els jugadors.
    </p>
    <img
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmlld3ZhamZoOHIzOGkzbjl1emh3cnU1MDJjZHB4Y2lsZDEyczdyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zqsy6KsvKTiK6FWWbG/giphy.webp"
      alt="Clickers" class="enemy-image">

    <p>
      Sephiroth és un dels antagonistes més importants de la història dels videojocs. Amb una espasa enorme i una
      història personal complexa, Sephiroth es presenta com una amenaça que no només desafia el protagonista, Cloud
      Strife, sinó també la moral dels jugadors.
    </p>
    <img
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWNkeXhrYXgxdHR0b3g1Z3FwYjZtbnQyYnlheGU1eGZ2YXIydXloNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WaTzH3uxzKFvSY6mjF/giphy.webp"
      alt="Sephiroth" class="enemy-image">

    <h3>Vídeo sobre una review d'un videojoc</h3>
    <p>
      Aquest vídeo parla sobre una review detallada d'un videojoc, on es comentaran els punts forts i les
      característiques que el fan únic. A través d'aquesta revisió, coneixerem les opinions dels jugadors i els aspectes
      que més destaquen d'aquesta obra.
    </p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/jk6NF0R40lU?si=4HmmyG6-qZfYxnIO"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>

    <h2>Reflexió sobre els enemics en els videojocs</h2>
    <p>
      Els enemics més memorables en els videojocs no només representen obstacles, sinó que també ajuden a construir la
      narrativa i l'emoció d'un joc. Les seves accions i comportament poden generar una gran tensió i una experiència
      inesborrable per als jugadors.
    </p>

    <div class="moving-element"></div>
    <div class="moving-element2"></div>
  </div>
</template>

<script>
export default {
  name: 'CognitiveDisability',
};
</script>

<style scoped>
.cognitive-disability-container {
  background: linear-gradient(45deg, #ff9a8b, #f0c27b);
  color: #f1faee;
  font-family: 'Jersey 15', sans-serif;
  padding: 20px;
  border: 2px solid #ff4b2b;
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
  animation: moveText 5s infinite alternate;
}

h2,
h3 {
  font-size: 1.8em;
  color: #000000;
}

p {
  font-size: 1.2em;
  line-height: 1.8;
  margin: 20px 0;
}

.enemy-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 15px 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.enemy-image:hover {
  transform: scale(1.05);
}

iframe {
  margin-top: 20px;
  border: 2px solid #90e0ef;
  border-radius: 8px;
}

@keyframes moveText {
  0% {
    color: #ff4b2b;
  }

  25% {
    color: #ff9a8b;
  }

  50% {
    color: #ffbe0b;
  }

  75% {
    color: #f0c27b;
  }

  100% {
    color: #ff4b2b;
  }
}

.moving-element {
  position: fixed;
  top: 0;
  left: 10%;
  width: 50px;
  height: 50px;
  background-color: #ff4b2b;
  border-radius: 50%;
  animation: moveVertical 0.6s infinite linear;
  transform: translateX(-50%);
}

.moving-element2 {
  position: fixed;
  top: 0;
  left: 90%;
  width: 50px;
  height: 50px;
  background-color: #ff4b2b;
  border-radius: 50%;
  animation: moveVertical 0.8s infinite linear;
  transform: translateX(-50%);
}

@keyframes moveVertical {
  0% {
    top: -60px;
  }

  100% {
    top: 100vh;
  }
}
</style>
