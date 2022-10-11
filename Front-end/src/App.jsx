import {useRoutes} from 'react-router-dom'
import {routes} from './routes/routes'

/**
 *
 * @returns {React.ReactElement} JSX.Element - the user main page with API data
 */

function App() {
  let elementsToDisplay = useRoutes(routes)
  return (
   <>
    {elementsToDisplay}
   </>
  )
}

export default App;
