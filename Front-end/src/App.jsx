import { useRoutes } from 'react-router-dom'
import { routes } from './router/Routes'

/**
 *
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

function App() {
  let elementsToDisplay = useRoutes(routes)
  return <main className="App">{elementsToDisplay}</main>
}

export default App
