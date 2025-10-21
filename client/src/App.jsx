import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewCreatures from './pages/ViewCreatures'
import EditCar from './pages/EditCar'
import CreateCar from './pages/CreateCar'
import CreatureDetails from './pages/CreatureDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateCar title='BOLT BUCKET | Customize' />
    },
    {
      path:'/creatures',
      element: <ViewCreatures title='CorpCreature | Custom Creatures' />
    },
    {
      path: '/creatures/:creatureId',
      element: <CreatureDetails title='CorpCreature | Edit Creature' />
    },
    {
      path: '/edit/:id',
      element: <EditCar title='BOLT BUCKET | Edit' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App