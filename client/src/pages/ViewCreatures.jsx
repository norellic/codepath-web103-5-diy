import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ViewCreatures = () => {

    const [creatures, setCreatures] = useState([]);

    useEffect(() => {
        const fetchCreatures = async () => {
            const response = await fetch('/api/creatures')
            const data = await response.json()
            setCreatures(data)
        }
        fetchCreatures()
    }, [])
    
    return (
        <div>
        {creatures.map((c) => (
            <div key={c.id}>
                <h2>{c.name}</h2>
                <Link to={`/creatures/${c.id}`} >
                    <button> Creature Details </button>
                </Link>
            </div>
        ))}
        </div>
    )
}

export default ViewCreatures