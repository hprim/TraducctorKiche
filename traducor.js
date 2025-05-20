const input = document.getElementById('texto');
const resultado = document.getElementById('resultado');

let timeout = null;

input.addEventListener('input', () => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
        const texto = input.value.trim();

        if (texto === "") {
            resultado.innerHTML = "";
            return;
        }

        const res = await fetch('http://localhost:8000/translate', {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ texto: texto })
        });

        if (res.ok) {
            const data = await res.json();
            resultado.innerHTML = `Traducción: ${data.traduccion}`;
        } else {
            resultado.innerHTML = 'Error al traducir';
        }
    }, 500);
});

function MostrarMensaje() {
      const texto = document.getElementById("texto").value;
      const resultado = document.getElementById("mensajeResultado");

      if (texto.trim() === "") {
        resultado.innerHTML = "Por favor, escribe algo antes de enviar.";
      } else {
        resultado.innerHTML = "<p><strong>Tu mensaje:</strong> " + texto + "</p>";
        document.getElementById("texto").value = ""; // limpia el textarea
      }
    }