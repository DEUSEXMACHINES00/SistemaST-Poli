'use strict'
var express = require('express');
var router = express.Router();
var MatriculaController = require('../controllers/matricula');


router.post('/guardar-matricula', MatriculaController.guardarMatricula);
router.get('/matriculas', MatriculaController.getMatriculas);
router.get('/matricula/:placa', MatriculaController.getMatricula);
router.delete('/matricula/:placa', MatriculaController.eliminarMatricula);
router.put('/matricula/:placa', MatriculaController.actualizarMatricula);


module.exports = router;