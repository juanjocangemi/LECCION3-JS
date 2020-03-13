// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for(i = 0 ; i < array.length ; i++){
  	
  	array[i] = array[i] + 1;

  }

  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);

  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  // Preseteo de variable tipo string donde se irán concatenando los 
  // elementos del array palabras.
  var frase = "";

  for(var i = 0; i < palabras.length; i++){

  	//Si el indice i está apuntando al último elemento del array
  	if(i === palabras.length - 1){

  		// No agregar un espacio al final
  		frase = frase + palabras[i];
  	}

  	else{

  		// Sino, agregar un espacio al final
  		frase = frase + palabras[i] + " ";

  	}

  }

  return frase;

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for(var i = 0 ; i < array.length ; i++){

  	if(array[i] === elemento){

  		return true;
  	}

  }

  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  // Se define variable que irá acumulando las sumas parciales.
  // Preseteo suma en 0.
  var suma = 0;

  for(var i = 0; i < numeros.length; i++){

  	suma = suma + numeros[i];

  }

  return suma;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  var suma = 0;
  var promedio = null;

  for(var i = 0; i < resultadosTest.length; i++){

  	suma = suma + resultadosTest[i];

  }

  promedio = suma / resultadosTest.length;

  return promedio;

}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  //Suposición: el primer elemento es el máximo
  var max = numeros[0];

  for(var i = 0; i < numeros.length; i++){

  	if(numeros[i] >= max){

  		max = numeros[i];
  	}

  }

  return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

  // Para que el primer argumento se multiplique por 1 y no por sí mismo.
  // En la variable resultado se irán acumulando las multiplicaciones parciales.
  var resultado = 1;

  // Condición: no se pasan argumentos
  if(arguments.length === 0){

  	return 0;
  }

  // Condición: se pasa SOLO un argumento
  else if(arguments.length === 1){

  	return arguments[0];
  }

  // Condición: se pasa más de un argumento
  else{

  	for(var i = 0; i < arguments.length; i++){

  		resultado = resultado * arguments[i];
  	}
  }

  return resultado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
