'use strict'

// Cargar modulos de node para crear el servidor
var express = require('express'); //modulo que va a permitir crear el servidor
var bodyParser = require('body-parser'); //una vez recibida la petición la convierte en un objeto nativo js


// Ejecutar express para poder trabajar con http
var app = express();

// Cargar las ficheros rutas


// Cargar middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS (Permitir peticiones desde el frontend)


// Añadir prefijos a rutas


//Ruta de prueba
app.get('/probando', (req, res) => {
    return res.status(200).send({
        curso: 'Máster en frameworks JS',
        autor: 'El profe',
        URL: 'wwww.hola.com'
    })
});

// Exportar módulo (fichero actual para usar fuera)
module.exports = app;