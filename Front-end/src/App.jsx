import {useRoutes} from 'react-router-dom'
import {routes} from './router/Routes'


/**
 * App function
 * @returns {ReactElement}
 */
function App() {
  let elementsToDisplay = useRoutes(routes)
  return (
    <main className="App">
       {elementsToDisplay}
    </main>
  )
}

export default App
