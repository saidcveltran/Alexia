var miAudio = document.getElementById("miAudio");
        var miBoton = document.getElementById("miBoton");
        var iconoReproducir = document.getElementById("iconoReproducir");
    
        miBoton.addEventListener("click", function() {
          if (miAudio.paused) {
            miAudio.play();
            iconoReproducir.innerHTML = "&#10074;&#10074;";
            miBoton.textContent = "Pausar";
          } else {
            miAudio.pause();
            iconoReproducir.innerHTML = "&#9658;";
            miBoton.textContent = "Reproducir";
          }
        });
