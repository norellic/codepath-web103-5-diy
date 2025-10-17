import express from 'express'
import creatureController from '../controllers/creatureController.js'

const router = express.Router()

router.get('/creatures', (req, res, next) => {
    console.log("GET /creatures");
    next();
}, creatureController.getCreatures)

export default router
