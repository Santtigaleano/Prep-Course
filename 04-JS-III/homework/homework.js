// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return (array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length -1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let a= 0; a < array.length; a++) {
    array[a] = array [a] + 1;
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
  palabrasConcatenadas= palabras[0]
  for (let a=1; a < palabras.length; a++) {
  
  palabrasConcatenadas = palabrasConcatenadas + ' ' + palabras[a];
  
  }
  
  return palabrasConcatenadas;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let a = 0; a < array.length; a++)
    if(array[a] === elemento) {
      return true;
    }
    return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sumatotal = 0;
  for(let a= 0; a < numeros.length; a++) {
    sumatotal = sumatotal + numeros [a];
  }
  return sumatotal;
}



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0
  let suma= 0
  for(let a= 0 ; a < resultadosTest.length; a++) {
    suma= suma +resultadosTest[a];
  }  
  promedio = suma / resultadosTest.length;
  return promedio;
  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros[0]
  for(let a = 0; a < numeros.length; a++) {
    if(numeros[a] > mayor) {
      mayor= numeros [a]
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:}
  if(arguments.length  === 0) {
    return 0;

  }
  var producto = arguments[0];
  // o sino producto = 1 (para la multiplicación)
  for(var a= 1; a < arguments.length; a++) {
    producto= producto * arguments[a]; }
return producto;
}



function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cantidad= 0
  for(let a = 0; a < arreglo.length; a++) {
    if(arreglo[a] > 18) {
      cantidad= cantidad + 1;
    }}
    return cantidad;
  
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
  } 
  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var string = n.toString()
  if(string[0]=== "9"){
    return true;
  } return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let primero= arreglo[0]
  for(let a= 1; a < arreglo.length; a++) {
    if(primero === arreglo[a]) {
      return true;
    }
    return false;  
  }
 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nvoArray = [];
    for(let a = 0; a < array.length; a++) {
      if(array[a] === "Enero" || array[a] === "Marzo" || array[a] === "Noviembre") {
        nvoArray.push(array[a])
      }
    }
    if(nvoArray.length !== 3) {
      return "No se encontraron los meses pedidos"
    }
    return nvoArray;
  }



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevosnum = []
  for(let a=0 ; a < array.length; a++) {
    if(array[a] >= 100)
      array.push(array[a])
  }
  return nuevosnum;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let suma= [];
  var cont = 0
  for (let a = 1; a <= 10; a++) {
    numero= numero + 2;
    cont = a;
    suma.push(numero);
    if(numero === cont) {
    break;
    }
  }
  if(numero === cont) {
    return "Se interrumpió la ejecución"
  }
  else { return suma}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  //numero=numero + 2 ==> hasta 10 vveces
  //cont = cont +1
  //array.push(numero)
  //retornar array
  //cont === 5 ===> continue
  var array= []
  for(var a= 1; a <= 10; a++) {
    if(a === 5){
      continue;
    }
    numero = numero + 2;
    array.push(numero)
  }
  return array;

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
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
