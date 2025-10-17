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

export default { getCreatures }