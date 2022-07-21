const Router = require('express')
const router = new Router()
const rowController = require('../controllers/row.controller')

router.post('/row', rowController.createRow)
router.get('/row', rowController.getRows)
router.get('/row/:id', rowController.getOneRow)
router.put('/row', rowController.updateRow)
router.delete('/row/:id', rowController.deleteRow)

module.exports = router
