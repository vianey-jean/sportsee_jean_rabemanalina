import React from "react"
 import './_loader.scss'

 /**
 * Component - Loader, to loade the page wait a data
 * @returns {React.ReactElement} JSX.Element - loader element
 */


function Loader() {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
