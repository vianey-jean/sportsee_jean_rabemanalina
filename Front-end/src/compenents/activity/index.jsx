import {
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'  //import Recharts pour graphique
import PropTypes from 'prop-types' //import prototypes
import './_dailyActivity.scss' //import scss de l'activity

/**
 * Component - BarChart Graph of Daily activity
 * @param {Object[]} userActivity user's physical activity data
 * @param {String} userActivity[].day
 * @param {Number} userActivity[].kilogram - array activity on kg
 * @param {Number} userActivity[].calories - arry activity on kcal
 * @returns {React.ReactElement} JSX.Element - physical activity chart 
 * @see https://recharts.org/en-US/api/Barchart
 */

function Activity({ userActivity }) {
  const data = userActivity.map((item) => {
    return { ...item, day: item.day.split('')[9] }
  })

  return (
    <article className="dailyActivity">
      <h2>Activité quotidienne</h2>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: 10, bottom: 50 }} //Taille de l'espace entre les trai 
        >
          <CartesianGrid
            strokeDasharray="2 2" //Taille des traits de mesures en horizontal mais pas verstical
            horizontal={true}
            vertical={false}
          />

          <XAxis
            dataKey="day"
            tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }} //taille et couleur de mesure du jour au dessous de la barre (unité jour)
            tickLine={false}
            tickSize={16}
            stroke="#DEDEDE"
          />

          <YAxis
            yAxisId={0}  // la barre de mesure la première
            dataKey="kilogram" //donné en kg
            stroke="#9B9EAC" //sa couleur
            orientation="right" //son orientation à droite
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: '14', fontWeight: 500 }}
            domain={['dataMin - 1', 'dataMax + 2']}
          />
          <YAxis
            yAxisId={1}  //la barre de mesure la deuxième
            dataKey="calories"
            hide={true} //donné en calorie
            domain={['dataMin - 100', 'dataMax + 100']} //mise en place la mesure en horizontale les calories
          />

          <Tooltip
            itemStyle={{
              color: 'white',
              fontSize: 10,
              fontWeight: 500, //taille et couleur la valeur du caalorie 
            }}
            formatter={(value, name, unit) => [value, unit]}
            labelStyle={{ display: 'none' }}
            contentStyle={{
              backgroundColor: '#E60000', //couleur du fond de la valeur
            }}
          />

          <Legend
            verticalAlign="top" //mise en place et forme les legendes, c'est au dessus
            align="right" //alignement à droite
            iconType="circle" //icon circulaire (le point)
            iconSize={8}
            height={47} //la taille
          />

          <Bar
            yAxisId={0} //barre le premier (a gauche)
            dataKey="kilogram" //la barre horrizontale celle en KG
            fill="#282D30" //sa couleur
            barSize={7} //taille
            radius={[3, 3, 0, 0]} //radius
            unit=" kg"  //unité
            name="Poids (kg)"
          />

          <Bar
            yAxisId={1} //barre deuxième (celle à droite)
            dataKey="calories" //la barre horizontale en calorie
            fill="#E60000" // sa couleur
            barSize={7} // sa taille
            radius={[3, 3, 0, 0]} //radius
            unit=" Kcal"   //unite
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  )
}

Activity.propTypes = {
  userActivity: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ).isRequired,
} 

export default Activity
