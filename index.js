
//importamos la funcion registrar y leer desde el archivo operaciones.js
const { registrar, leer } = require("./operaciones.js");

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);// primero quito los posiciones que no necesito de la array y desestructuro la array indicando que "registrar"ahora será operaciones.

//console.log(argumentos);

//ahora creo las condiciones
if (operacion == "registrar") {
  if (operacion && nombre && edad && animal && color && enfermedad) {// si operacion es igual a registrar muestrame data
    const data = {
      nombre,
      edad,
      animal,
      color,
      enfermedad
    }
    registrar(data);
    return;
  } else {
    console.log("faltan argumentos");//si no, envia este mensaje
  }
}

//si operacion es igual a leer muestrame el contenido
if (operacion == "leer") {
  leer();
  return;
}

console.log("opcion no valida"); //si no, este  mensaje
return;
