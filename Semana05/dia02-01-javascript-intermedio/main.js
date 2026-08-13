// console.log('Hola JS')

// TIPOS DE DATOS PRIMITIVOS (Number, string, boolean, null, undefined, BigInt, Symbol)

// TIPOS DE DATOS NO PRIMITIVOS (Arrays (Arreglos), Objects (Objetos), Function, etc)

// ARRAYS

// Un arreglo puede contener elementos de cualquier tipo: cadenas, numeros, booleans, null, arrays, objetos, etc

// DECLARACIÓN

const arregloVacio = []
const listaDeNumeros = [25, 36, 89, -99, 15.68]
const listaDeValores = [1, 2, 3, 'Alejandro', 'Taquima', 'Código', true, null, undefined]

console.log(arregloVacio)
console.log(listaDeNumeros)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[3])  // Alejandro
console.log(listaDeValores[5])  // Código
console.log(listaDeValores[99]) // underfined

// Escritura en un arreglo 

listaDeValores[3] = 'Jhoel'
listaDeValores[7] = 1689

console.log(listaDeValores)

Object.freeze(listaDeValores)
listaDeValores[8] = 'Hola a todos'
console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo al final (push)

const listaDeNombres = ['Daril', 'Jhoel']

console.log(listaDeNombres)

listaDeNombres.push('Alejandro')
listaDeNombres.push('Carlos')
console.log(listaDeNombres)

// Remover elementos del final de un arreglo (pop)

listaDeNombres.pop()
listaDeNombres.pop()
console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

listaDeNombres.splice(0, 0, 'CÓDIGO')
listaDeNombres.splice(2, 0, 'TECSUP')

console.log(listaDeNombres)

// Eliminar un elemento en una posicion determinada

listaDeNombres.splice(2,1)
console.log(listaDeNombres)

// Obterner el tamaño de mi arreglo
console.log(listaDeNombres.length) //3
console.log('bienvenido'.length) //10

//Obtener el último elemento del arreglo

console.log(listaDeNombres[3-1]) //Jhoel
console.log(listaDeNombres[listaDeNombres.length-1]) //Jhoel
console.log(listaDeNombres.at(0)) //CÓDIGO
console.log(listaDeNombres.at(-1)) //Jhoel
console.log(listaDeNombres.at(-2)) //Daril

// TODO: Otras funciones - slice (Investiguen)

// MÉTODOS DE ARREGLOS (INCLUDES, FILTER, MAP, REDUCE, SORT, FOREACH)

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean (true o false)

const lenguajes = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']
console.log(lenguajes.includes('java')) //true
console.log(lenguajes.includes('cobol')) //false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con lo que encontró

const resultado = lenguajes.filter(function(item){
    //return item === 'java'
    //return item === 'python'
    //return item.includes('c') || item.includes('C')
    return item.toLowerCase().includes('c')
})
console.log(resultado)

// Método MAP, evalua un arreglo, lo analiza y hay que pasarle una función. Nos devuelve un arreglo modificado. Siempre devuelve un nuevo arreglo.

console.log(lenguajes)

const nombreConTituloEspecial = lenguajes.map(function(lenguaje){
    // Lógica para evaluar y modificar el arreglo
    //return 'hola'
    //return '*' + lenguaje + 

})

console.log(nombreConTituloEspecial)

//Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta(cambia) el arreglo original. Usar tosorted() en lugar de sort roms recomendacion.

//const ordenarlenguajes = lenguajes.sort() //Sort muta(cambia) el arreglo original
const ordenarlenguajes = lenguajes.toSorted()

console.log(ordenarlenguajes)
console.log(lenguajes)

//Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

for (let index =0; index <10; index ++){
    console.log(index)
}

const miArreglo = []

lenguajes.forEach(function(lenguaje){
    console.log('#', lenguaje)
    miArreglo.push('El mejor:' + lenguaje)
})

console.log(miArreglo)
//Método REDUCE, nos ayuda a acumular(sumar) los valores en un arreglo

const numeros = [3, 40, 100, 7, 50] // 200

// con un FOR

let sumatoria = 0 // Acumulador

for (let i=0; i<numeros.length; i++) {
    sumatoria = sumatoria + numeros[i]
}

console.log(sumatoria) //200

const sumatoriaConReduce = numeros.reduce(function(Acumulador, valorActual){
    return Acumulador + valorActual
}, 0)
console.log(sumatoriaConReduce) //200

//OBJETOS, una forma de guardar informacion en pares de clave: valor

// Un objeto sirve para agrupar datos relacionados en un solo lugar 

/*
{
    KEY: VALUE,
    KEY2: VALUE2,
    KEY3: VALUE3,
}
 */

const miObjetoVacio = {}

console.log(miObjetoVacio)

const persona = {
    nombre: 'Daril',
    edad: 28,
    esProgramador: true,
    "mi color favorito": 'azul',
    coloresFavoritos: ['rosado', 'rojo', 'verde']
}

const persona2 = {
    nombre: 'Victor',
    edad: 40,
    esProgramador: false,
}

//Leer los campos de un objeto (notación de punto y de corchete)

console.log(persona.nombre) //Daril
console.log(persona.edad) //28
console.log(persona2.edad) //40
console.log(persona.estadoCivil) //undefined
console.log(persona.coloresFavoritos) //['rosado', 'rojo', 'verde']
console.log(persona.coloresFavoritos[0]) //'rosado'
console.log(persona["mi color favorito"]) //'azul'

//Eliminar las propiedades de un objeto

delete persona2.edad
persona2.esProgramador = undefined

console.log(persona2) // 

//Insertar una nueva propiedad a un objeto

persona.platilloFavorito = 'Ceviche de conchas negras'
persona['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraf']

console.log(persona)




