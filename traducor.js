const diccionario = {
  "Tía" : "Ch'utinan", 
  "primo(a)":"Ukab' achalaxik" ,
  "sobrino(a)":"Ikaq'",
  "padrino":"Yuwa'chinb'ej, tatyox " ,
  "hola": "saqarik",
  "adiós": "chʼabʼej",
  "comida": "wa",
  "casa": "ja",
  "escuela": "nimajay",
  "maestro": "tijoxel",
  "agua": "jaʼ",
  "fuego": "kʼaq",
  "día": "qʼij",
  "noche": "aqʼabʼ",
  "mamá": "nan",
  "papá": "Tat" 
};

function traducir() {
  const palabra = document.getElementById("input-word").value.toLowerCase().trim();
  const resultado = document.getElementById("resultado");

  if (palabra in diccionario) {
    resultado.textContent = ` En K'iche'la palabra ${palabra} es: ${diccionario[palabra]}"`;
  } else {
    resultado.textContent = " Palabra no encontrada en el diccionario.";
  }
}