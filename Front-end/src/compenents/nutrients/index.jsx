import caloriesIcon from '../../assets/calories.svg'
import proteinIcon from '../../assets/protein.svg'
import carbsIcon from '../../assets/carbs.svg'
import fatIcon from '../../assets/fat.svg'
import NutrientCard from './NutrientCard'
import PropTypes from 'prop-types'
import './_nutrients.scss'


function Nutrients({ userKeyData }) {
  return (
    <>
      <NutrientCard
        classNameIcone="caloriesIcon"
        icon={caloriesIcon}
        value={userKeyData.calorieCount}
        nutrientType={'calories'}
      />
      <NutrientCard
        classNameIcone="proteinIcon"
        icon={proteinIcon}
        value={userKeyData.proteinCount}
        nutrientType={'protéines'}
      />
      <NutrientCard
        classNameIcone="carbsIcon"
        icon={carbsIcon}
        value={userKeyData.carbohydrateCount}
        nutrientType={'glucides'}
      />
      <NutrientCard
        classNameIcone="fatIcon"
        icon={fatIcon}
        value={userKeyData.lipidCount}
        nutrientType={'lipides'}
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
