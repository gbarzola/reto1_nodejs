var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomContenido = faker.lorem.sentence();
  var randomFecha = faker.date.past();
  var randomImage = faker.image.avatar();
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomContenido,
    fecha: randomFecha,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})


app.listen(process.env.PORT, process.env.IP);