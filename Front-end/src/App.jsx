import {useRoutes} from 'react-router-dom'
import {routes} from './routes/routes'



function App() {
  let elementsToDisplay = useRoutes(routes)
  return (
   <>
    {elementsToDisplay}
   </>
  )
}

export default App;
