async function traducir() {
    const texto = document.getElementById('texto').value;
    const idioma = document.getElementById('idioma').value;

    const res = await fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ texto, idioma })
    });

    const resultado = document.getElementById('resultado');
    if (res.ok) {
        const data = await res.json();
        resultado.innerHTML = `Traducción: ${data.traduccion} <br> Validado: ${data.validado ? 'Sí' : 'No'}`;
    } else {
        resultado.innerHTML = '❌ Traducción no encontrada.';
    }
}
