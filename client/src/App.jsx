import React, { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewCars from './pages/ViewCars'
import EditCar from './pages/EditCar'
import CreateCar from './pages/CreateCar'
import CarDetails from './pages/CarDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateCar title='BOLT BUCKET | Customize' />
    },
    {
      path:'/customcars',
      element: <ViewCars title='BOLT BUCKET | Custom Cars' />
    },
    {
      path: '/customcars/:id',
      element: <CarDetails title='BOLT BUCKET | View' />
    },
    {
      path: '/edit/:id',
      element: <EditCar title='BOLT BUCKET | Edit' />
    }
  ])

  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    const fetchCreatures = async () => {
      const response = await fetch('api/creatures')
      const data = await response.json()
      setCreatures(data)
    }
    fetchCreatures()
  }, [])

  return (
    <div className='app'>

      <Navigation />

        {creatures.map((c) => (
          <div key={c.id}>
            <h2>{c.name}</h2>
          </div>
        ))}

      { element }

    </div>
  )
}

export default App