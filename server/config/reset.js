import { pool } from './database.js'
import './dotenv.js'
import corpCreatureData from '../data/corperateCreature.js'

const createCorpCreatureTable = async() => {

    const createTableQuery = `
    DROP TABLE IF EXISTS corpCreature;
    
    CREATE TABLE IF NOT EXISTS corpCreature (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        body VARCHAR(255) NOT NULL,
        drink VARCHAR(255) NOT NULL,
        mood VARCHAR(255) NOT NULL,
        accessory VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        stress_level INTEGER DEFAULT 0
    )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log("fully staffed☕👥")
    } catch(err) {
        console.error('~~~~~~~~~~~~~~~~~~ let\'s reschedule :// ~~~~~~~~~~~~~~~~~~')
    }
}

const seedCorpCreatureTable = async() => {

    await createCorpCreatureTable()

    corpCreatureData.forEach(creature => {
        const insertQuery = {
            text: 'INSERT INTO corpCreature (name, body, drink, mood, accessory, color, stress_level) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            creature.name,
            creature.body,
            creature.drink,
            creature.mood,
            creature.accessory,
            creature.color,
            creature.stress_level
        ]
        
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error(`🚨 ${creature.name} running late!`, err)
            } 
            console.log(`${creature.name} is ready to engage in crossfunctional collaboration about user pain points !! 🤜🤛`)
        })
    });    
}

seedCorpCreatureTable();