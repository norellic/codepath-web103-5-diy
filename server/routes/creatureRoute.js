import express from 'express'
import creatureController from '../controllers/creatureController.js'

const router = express.Router()

router.get('/creatures', (req, res, next) => {
    console.log("GET /creatures");
    next();
}, creatureController.getCreatures)

router.get('/creatures/:creatureId', (req, res, next) => {
    console.log("GET /creatureId");
    next();
}, creatureController.getCreatureById)

router.get('edit/:creatureId', (req, res) => {
    console.log("GET /edit")
})

router.post('/creatures', creatureController.createCreature)

router.patch('/creatures/:creatureId', creatureController.updateCreature)

export default router
