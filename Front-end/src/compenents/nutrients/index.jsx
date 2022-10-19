//import images svg, proptypes et scss 

import caloriesIcon from '../../assets/calories.svg'
import proteinIcon from '../../assets/protein.svg'
import carbsIcon from '../../assets/carbs.svg'
import fatIcon from '../../assets/fat.svg'
import NutrientCard from './NutrientCard'
import PropTypes from 'prop-types'
import './_nutrients.scss'


/**
 * @param {object} userKeyData - The different types of nutrients
 * @param {number} userKeyData.calorieCount - Calorie type nutrient
 * @param {number} userKeyData.proteinCount - Protein type nutrient
 * @param {number} userKeyData.carbohydrateCount - Carbohyrate type nutrient
 * @param {number} userKeyData.lipidCount - Lipide type nutrient
 * @returns {React.ReactElement} JSX.Element - aside Nutrients containing the Nutrients cards
 */


function Nutrients({ userKeyData }) {
  return (
    <>
      <NutrientCard  
        classNameIcone="caloriesIcon" //class caloriesIcons
        icon={caloriesIcon}  //images svg calories
        value={userKeyData.calorieCount}  //données calories
        nutrientType={'calories'} //type
      />
      <NutrientCard
        classNameIcone="proteinIcon" //class proteinicon
        icon={proteinIcon} //images svg proteins
        value={userKeyData.proteinCount} //données du proteines
        nutrientType={'protéines'} //types pretoines
      />
      <NutrientCard
        classNameIcone="carbsIcon" //class carbsicon
        icon={carbsIcon} //images svg carbsicon
        value={userKeyData.carbohydrateCount}  //données carb
        nutrientType={'glucides'} //types glucides
      />
      <NutrientCard
        classNameIcone="fatIcon" //class faticon
        icon={fatIcon}  //images svg faticon
        value={userKeyData.lipidCount} //donnée lipides
        nutrientType={'lipides'}  //types lipides
      />
    </>
  )
}

Nutrients.propTypes = {
  userKeyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
}

export default Nutrients
