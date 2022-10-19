// iport proptypes et react

import PropTypes from 'prop-types'
import React from 'react'

/**
 * @param {{icon : string, value: number, nutrientType: string, classNameIcone: string }} props nutrient data
 * @returns {React.ReactElement} JSX.Element - all nutrient card
 */

function NutrientCard({ icon, value, nutrientType, classNameIcone }) {
  return (
    <div className={`nutrient ${nutrientType}`}>  {/**mettre ici le type */}
      <div className={`nutrient__icon ${classNameIcone}`}> {/**mettre ici le nom */}
        <img src={icon} alt="" className="macros-icon" /> {/**mettre ici l'icon'*/}
      </div>
      <div className="nutrient__info">
        <h2>{value}</h2> {/**mettre ici la valeur */}
        <p>{nutrientType}</p> {/**mettre ici le type */}
      </div>
    </div>
  )
}

NutrientCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  nutrientType: PropTypes.string.isRequired,
  classNameIcone: PropTypes.string.isRequired,
}

export default NutrientCard
