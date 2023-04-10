'use strict'

var Matricula = require('../models/matricula');

var controller = {

    guardarMatricula: function (req, res) {
        var params = req.body;

        var matricula = new Matricula();
        matricula.tipo = params.tipo;
        matricula.placa = params.placa;
        matricula.fechaMatricula = params.fechaMatricula;
        matricula.marca = params.marca;
        matricula.propietario = params.propietario;

        Matricula.findOne({ placa: matricula.placa }, (err, resultado) => {
            if (err) return res.status(500).send({ err });
            if (!resultado) {
                matricula.save((err, matriculaStored) => {
                    if (err) return res.status(500).send({ err });
                    if (!matriculaStored) return res.status(404).send({ message: "No se ha podido registrar la matricula..." });
                    return res.status(200).send({ matricula: matriculaStored });
                });
            } else {
                res.status(400).json({ error: 'Ya existe el vehiculo ' });
            }
        })

    },
    getMatriculas: function (req, res) {

        Matricula.find({}).exec((err, matriculas) => {
            if (err) return res.status(500).send({ message: "Error al devolver datos.." });
            if (!matriculas) return res.status(404).send({ message: "No hay matriculas para mostrar..." });
            return res.status(200).send({ matriculas: matriculas });
        });
    },

    getMatricula: function (req, res) {
        var placa = req.params.placa;
        Matricula.findOne({ "placa": placa }, (err, matricula) => {
            if (err) return res.status(500).send({ message: "Error al devolver datos..." });
            if (!matricula) return res.status(404).send({ message: "La matricula no existe..." });
            return res.status(200).send({ matricula });
        });
    },

    eliminarMatricula: function (req, res) {
        var placa = req.params.placa;
        Matricula.findOneAndDelete({ "placa": placa }, (err, matricula) => {
            if (err) return res.status(500).send({ message: "Error al eliminar matricula..." });
            if (!matricula) return res.status(404).send({ message: "La matricula no existe..." });
            return res.status(200).send({ matricula });
        });
    },

    actualizarMatricula: function (req, res) {

        var placa = req.params.placa;
        var DataToUpdate = req.body;              
        
        Matricula.findOneAndUpdate({ "placa": placa }, {"$set":DataToUpdate}, (err, matriculaUpdate) => {
            if (err) return res.status(500).send({ message: "Error al actualizar datos.." });
            if (!matriculaUpdate) return res.status(404).send({ message: "No hay matricula para actualizar..." });
            return res.status(200).send({ matriculaUpdate });
        });
    }

}

module.exports = controller;