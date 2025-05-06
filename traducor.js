async function traducir() {
    const texto = document.getElementById('texto').value;
  
    const res = await fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ texto })
    });

    const resultado = document.getElementById('resultado');
    if (res.ok) {
        const data = await res.json();
        resultado.innerHTML = `Traducción: ${data.traduccion} <br> Validado: ${data.validado ? 'Sí' : 'No'}`;
    } else {
        resultado.innerHTML = 'Traducción no encontrada/No válida';
    }
}
  
async function MostrarMensaje() {
    const mensaje = document.getElementById('MostrarMensaje').value;
  
    const res = await fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensaje })
    });

    const resultado = document.getElementById('mensajeResultado');
    if (res.ok) {
        const data = await res.json();
        resultado.innerHTML = `Mensaje: ${data.mensaje} <br> Validado: ${data.validado ? 'Sí' : 'No'}`;
    } 
}
  

