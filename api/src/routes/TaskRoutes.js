const express = require('express')

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')

const router = express.Router()

router.post('/', TaskValidation, TaskController.create) //verbo http para criar um registro
router.put('/:id', TaskValidation, TaskController.update) //verbo http para alterar um registro
router.get('/:id', TaskController.show) //verbo http para exibir um determinado registro
router.delete('/:id', TaskController.delete) //verbo http para deletar um registro
router.put('/:id/:done', TaskController.done)

router.get('/filter/all/:macaddress', TaskController.all)
router.get('/filter/late/:macaddress', TaskController.late)
router.get('/filter/today/:macaddress', TaskController.today)
router.get('/filter/week/:macaddress', TaskController.week)
router.get('/filter/month/:macaddress', TaskController.month)
router.get('/filter/year/:macaddress', TaskController.year)

module.exports = router
