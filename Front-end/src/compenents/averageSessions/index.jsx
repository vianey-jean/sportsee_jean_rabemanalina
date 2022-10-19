import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'    //import Recharts pour graphique
import PropTypes from 'prop-types'  //import Proptypes
import './_averageSession.scss'

/**
 * Component - LineChart Graph of session Longer
 * @param {object[]} userSessionAverage user’s average session data
 * @param {Number} userSessionAverage[].day Day of the week
 * @param {Number} userSessionAverage[].sessionLength Session duration
 * @returns {React.ReactElement} JSX.Element - average session chart
 */

function AverageSessions({ userSessionAverage }) {
  // Replace number day by good label
  const weekdays = ['L ', 'M ', 'M ', 'J ', 'V ', 'S ', 'D ']  //remplace le nombre du jour dans le tableau en lettre
  const data = userSessionAverage.map((item) => {
    return { ...item, day: weekdays[item.day - 1] }
  })

  return (
    <article className="averageSessions">
      <h2>Durée moyenne des sessions</h2>

      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={data} //mettre dans data les données
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        > 
          <CartesianGrid 
          vertical={false}   //grilles vertical fausse
          horizontal={false} //grille horizontal fausse
          /> 

          <Line
            type="natural" //type du trail natural
            dataKey="sessionLength" //donné vient sessionlength
            scale="band"
            stroke="white" //couleur en blanc
            strokeWidth={2}
            dot={false}
            activeDot={{ //taille de valeur et couleur en blanc
              fill: 'white',
              strokeOpacity: '.5',
              strokeWidth: '10',
              r: 4,
            }}
            unit=" min"
          />

          <XAxis //couleur et opacité du lettre du jour
            dataKey="day"
            tick={{ fill: 'white', opacity: '.7' }}
            tickLine={false}
            tickMargin={5}
            interval="preserveStartEnd"
            axisLine={false}
          />
          <YAxis hide={true} domain={['dataMin-20', 'dataMax+40']} /> 

          <Tooltip  //format et couleur de la valeur
            itemStyle={{
              color: 'black',
              fontSize: 8,
              fontWeight: 500,
            }}
            formatter={(value, name, unit) => [value, unit]} //formatter la valeur
            labelStyle={{ display: 'none' }}
            cursor={{
              stroke: 'black',
              strokeOpacity: 0.1,
              strokeWidth: 60,
              height: 263,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  )
}

AverageSessions.propTypes = {
  userSessionAverage: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    })
  ).isRequired,
}

export default AverageSessions
