const diccionario = {
  "tía" : "Ch'utinan", 
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
  "papá": "Tat" ,
  "cuerpo":"B'aqil, Ch'akul",
 "hueso":"B'aq",
 "bigote":"Ismachi'",
 "corazón":"Anima'",
 "boca":"Chi'aj",
 "sangre": "Kik'el",
 "lengua":"Aq'",
 "garaganta": "Qulaj",
  "brazo":"Talab', Teleb'",
  "ojo":"B'oq'ochaj",
  "oreja":"Xikinaj",
  "rodilla":"Ch'ek",
  "nariz":"Tza'maj",
  "piel": "Tz'umal",
  "cabello":"Wi'aj",
  "vientre":"pam",
  "labio": "Chi'aj",
  "pulmón":"Poror, pospo'y",
  "pierna":"Aqanaj",
  "espalda":"Wij",
  "lágrima":"Uwal b'oq'och",
  "mano":"Q'ab'aj",
  "pestaña":"Metz'aj",
  "Codo":"Chu'u'k",
  "cintura":"Xe'pam",
  "hombros":"Teleb'aj",
  "párpados":"Rij b'aq'och",
  "uña":"Ixk'iq",

function traducir() {
  const palabra = document.getElementById("input-word").value.toLowerCase().trim();
  const resultado = document.getElementById("resultado");

  if (palabra in diccionario) {
    resultado.textContent = ` En K'iche'la palabra ${palabra} es: "${diccionario[palabra]}"`;
  } else {
    resultado.textContent = " Palabra no encontrada en el diccionario. Asegurese de que la palabra esté escrita correctamente.";
  }
}