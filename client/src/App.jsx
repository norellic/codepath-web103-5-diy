import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewCreatures from './pages/ViewCreatures'
import EditCreature from './pages/EditCreature'
import CreateCreature from './pages/CreateCreature'
import CreatureDetails from './pages/CreatureDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreateCreature title='BOLT BUCKET | Customize Creature' />
    },
    {
      path:'/creatures',
      element: <ViewCreatures title='CorpCreature | Custom Creatures' />
    },
    {
      path: '/creatures/:creatureId',
      element: <CreatureDetails title='CorpCreature | Creature Details' />
    },
    {
      path: '/edit/:creatureId',
      element: <EditCreature title='CorpCreature | Edit Creature' />
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