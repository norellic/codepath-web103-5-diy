//preform CRUD ops associated with the corpCreature table

import { pool } from '../config/database.js'

const getCreatures = async (req, res) => {

    try {
        const results = await pool.query('SELECT * FROM corpCreature ORDER BY id ASC')
        console.log(results)
        res.status(200).json(results.rows)

    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
}

const getCreatureById = async (req, res) => {
    try {
        const selectQuery = `SELECT * FROM corpCreature WHERE id =  $1`
        const creatureId = req.params.creatureId

        const results = await pool.query(selectQuery, [creatureId]) //why second param
        res.status(200).json(results.rows[0])
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

export default { getCreatures, getCreatureById }