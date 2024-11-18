
//importamos el modulo File System
const fs = require("fs");

const registrar = (data) => {
  const file = JSON.parse(fs.readFileSync('citas.json', 'utf8')) //transformamos (parseamos)el archivo de texto plano (json) a texto javascript para poder trabajar con el
  file.push(data)
  fs.writeFileSync('citas.json', JSON.stringify(file) ) //y ahora lo volvemos a transformar nuevamente a texto plano para guardarlo
  console.log("mascota registrada");//mostramos por consola el mensaje
  return
};

const leer = () => {
  const citas = fs.readFileSync('citas.json', 'utf8')//llamamos al archivo y su formato
  console.log(JSON.parse(citas));
  return
};

module.exports = {registrar, leer}//exportamos las funciones registrar y leer