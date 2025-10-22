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

const createCreature = async(req, res) => {
    try {
        const { name, body, drink, mood, color, accessory, stress_level } = req.body

        console.log("Incoming data:", req.body);

        const results = await pool.query(`
            INSERT INTO  corpCreature (name, body, drink, mood, color, accessory, stress_level)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [name, body, drink, mood, color, accessory, stress_level])

            res.status(201).json(results.rows[0])

    } catch(error) {
            res.status(409).json( { error: error.message })
    }
}

const updateCreature = async(req, res) => {
    try {
        const creatureId = req.params.creatureId
        const { name, body, drink, mood, color, accessory, stress_level } = req.body

        const results = await pool.query(`
        UPDATE corpCreature
        SET name = $1, body = $2, drink = $3, mood = $4, color = $5, accessory = $6, stress_level = $7
        WHERE id = $8`, [name, body, drink, mood, color, accessory, stress_level, creatureId])

        res.status(201).json(results.rows[0])

    } catch(error) {
        res.status(409).json( { error: error.message })
    }
}

const deleteCreature = async(req, res) => {
    try {
        const creatureId = req.params.creatureId
        const results = await pool.query('DELETE FROM corpCreature WHERE id = $1', [creatureId])

        res.status(200).json(results.rows[0])

    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
}

export default { getCreatures, getCreatureById, createCreature, updateCreature, deleteCreature }