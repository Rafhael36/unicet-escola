const express = require('express');
const router = express.Router();
const MatriculasController = require('../controllers/MatriculasController');

// Rotas explícitas com a base/curso
router.get('/', MatriculasController.listarTodos);
router.get('/:id', MatriculasController.listarPorId);
router.post('/', MatriculasController.salvar);
router.put('/:id', MatriculasController.editar);
router.delete('/:id', MatriculasController.deletar);

module.exports = router;
