function reproducir() {
    const texto = document.getElementById("resultado").textContent;
    if (texto.trim() !== "") {
      const speech = new SpeechSynthesisUtterance(texto);
      speech.lang = "es-GT"; // idioma de la voz (puedes poner "quc" si tu navegador lo soporta)
      window.speechSynthesis.speak(speech);
    }
  }