import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'  //import Recharts
import PropTypes from 'prop-types'  //import proptypes
import './_perform.scss'  //import scss


/**
 * Component - RadarChart Graph of performance
 * @param {Object[]}  userPerform - The different types of performances
 * @param {number}  userPerform[].value - Performance values
 * @param {number}  userPerform[].kind - Types of performances
 * @returns {React.ReactElement} JSX.Element - Graph of performance
 */

function Perform({ userPerform }) {
  // REPLACE NUMBER DATA BY GOOD LABEL
  const kindName = [ //mettre dans tableau kindName les valeur dessous
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ]

  const data = userPerform.map((item) => {
    return { ...item, kind: kindName[item.kind - 1] }
  })

  return (
    <article className="perform">  {/**mettre dans class perform */}
      <ResponsiveContainer width="100%" height={263}> 
        <RadarChart data={data} cx="50%" cy="54%" outerRadius="70%">
          <PolarGrid radialLines={false} /> {/**ligne radial fausse */}
          <PolarAngleAxis
            dataKey="kind"
            tickSize={10} //taille tick
            tick={{
              fill: 'white', //couleur en blanc
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101" //couleur du trait 
            fill="#FF0101"  //couleur font
            fillOpacity={0.7}  //opacité
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  )
}

Perform.propTypes = {
  userPerform: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number,
    })
  ).isRequired,
}

export default Perform
