const express = require('express')

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')
const MacAddressValidation = require('../middlewares/MacAddressValidation')

const router = express.Router()

router.post('/', TaskValidation, TaskController.create) //verbo http para criar um registro
router.put('/:id', TaskValidation, TaskController.update) //verbo http para alterar um registro
router.get('/:id', TaskController.show) //verbo http para exibir um determinado registro
router.delete('/:id', TaskController.delete) //verbo http para deletar um registro
router.put('/:id/:done', TaskController.done)

router.get('/filter/all', MacAddressValidation, TaskController.all)
router.get('/filter/late', MacAddressValidation, TaskController.late)
router.get('/filter/today', MacAddressValidation, TaskController.today)
router.get('/filter/week', MacAddressValidation, TaskController.week)
router.get('/filter/month', MacAddressValidation, TaskController.month)
router.get('/filter/year', MacAddressValidation, TaskController.year)

module.exports = router
