import React from 'react'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><h1>Corporate Creature</h1></li>
            </ul>

            <ul>
                <li><a href='/' role='button'>Build Creature</a></li>
                <li><a href='/creatures' role='button'>View Creatures</a></li>
            </ul>
            
        </nav>
    )
}

export default Navigation