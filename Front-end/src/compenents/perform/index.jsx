import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import './_perform.scss'


function Perform({ userPerform }) {
  // REPLACE NUMBER DATA BY GOOD LABEL
  const kindName = [
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
    <article className="perform">
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart data={data} cx="50%" cy="54%" outerRadius="70%">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickSize={10}
            tick={{
              fill: 'white',
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
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
