/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let nuevoArray = Object.entries(objeto);
   return nuevoArray;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let nuevoObjeto = {}
  let crearArray = string.split("");
   crearArray.sort();

  for(let i=0; i<crearArray.length; i++){
   if(nuevoObjeto.hasOwnProperty(crearArray[i]) ){
      nuevoObjeto[crearArray[i]] = nuevoObjeto[crearArray[i]]+ 1;}
      else {
         nuevoObjeto[crearArray[i]] = 1 
      }
 } return nuevoObjeto;
} 





function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let letrasMayusculas = '';
   let letrasMinusculas = '';
   let fraseCompleta= '';

   function esMayuscula(letra){
      return letra === letra.toUpperCase();
   }
   for(var i=0; i< string.length; i++){
      if(esMayuscula (string[i])){
       letrasMayusculas += string[i];
      }else {
        letrasMinusculas += string[i]; ;
      }
   }
      fraseCompleta = letrasMayusculas + letrasMinusculas;
      return fraseCompleta;
   }

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  let palabras = frase.split(" ");
  let nuevaFrase = "";
  let palabra = "";
  let palabraInvertida = "";
   
  for (let i = 0; i < palabras.length; i++) {
    palabra = palabras[i];
    palabraInvertida = palabra.split("").reverse().join("");
    nuevaFrase += palabraInvertida + " "; 
  }return nuevaFrase.trim();

   }

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let numeroA = "";
   let numeroB = "";
   let numeroString = numero.toString();
   for(var i = 0; i < numeroString.length; i++) {
         numeroA += numeroString[i]; 
   } 
    for( var i= numeroString.length - 1 ; i >= 0 ; i--){
           numeroB += numeroString[i]; 
     }  
      if(numeroA == numeroB){
      return "Es capicua";
   } return "No es capicua";

   /* let convertirString = numero.toString();
   let stringInvertido = convertirString.split("").reverse().join("");
   let numeroInvertido = parseInt(stringInvertido, 10);
      
   if( numero === numeroInvertido){
      return "Es capicua";
   }else {
      return "No es capicua";
   } */
   }

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array= string.split("");

   nuevoArray = array.filter(function(letra){
      return letra !== "a" && letra !== "b" && letra !== "c" 
      
   }); nuevoString = nuevoArray.join("");
     
      return nuevoString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
  nuevoArray= arrayOfStrings.slice();

  nuevoArray.sort((a,b) =>a.length - b.length);
  return nuevoArray;

}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   grupo1 = [];
   grupo2 = [];
   grupoUnificado = [];

   for (var i = 0; i < array1.length; i++) {
      grupo1.push(array1[i]);
   }

   
   for (var i = 0; i < array2.length; i++){
      grupo2.push(array2[i]);

   }; 
   for(var i = 0; i < grupo1.length; i++){
   if(grupo2.includes(grupo1[i])) {
    grupoUnificado.push(grupo1[i]);
      
};
} return grupoUnificado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
