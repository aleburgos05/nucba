const texto = "este es un texto de prueva";


//vamos a cortar string:
console.log("usando slice para cortar: ", texto.slice(0, 26));

//remplazar palabras: 
console.log("remplazar texto:", texto.replace("prueva", "hola"));
console.log("remplazar texto:", texto.replace(/prueva/gi, "hola"));//g de global.(todas las ocurrencias ). i de insensitive (mayu/minu)
console.log("remplazar texto:", texto.replace(/u/gi, "a"))

//mayus - minus
console.log("a minu  " + texto.toLowerCase());
console.log(`a mayus: ${texto.toUpperCase()}`)

//convertir a array: 
console.log("a array", texto.split(` `));
//ahora separa y trae el segundeo elemento del array: 
console.log(`a mayus: ${texto.split(" ")[1]}`)