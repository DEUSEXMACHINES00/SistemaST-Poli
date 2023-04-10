'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatriculaSchema = Schema({
    tipo: String,
    placa: String,
    marca: String,   
    fechaMatricula: String,        
    propietario: {
        id: String,
        tipo: String,
        nombre: String,
        direccion: String
        
    }
});

module.exports = mongoose.model('Matricula', MatriculaSchema);