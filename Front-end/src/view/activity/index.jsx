import React, { Fragment } from 'react'
import './_activity.scss'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @param {object} activity user activity
 * @returns {ReactComponentElement} Bar graph of user activity
 */
const Activity = ({ activity }) => {
  const CustomTooltipActivity = ({ active, payload }) => {
    if (active) {
      return (
        <div className="customTooltipActivity">
          <p>{`${payload[0].value}Kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <>
      <div className="description">
        <p>Activité quotidienne</p>
        <ul>
          <li id="weight">Poids</li>
          <span className="kg">(kg)</span>
          <li className="cal">Calories brûlées</li>
          <span className="kcal">(kCal)</span>
        </ul>
      </div>
      <ResponsiveContainer height={270} width="100%">
        <BarChart data={activity} className="barChart">
          <Tooltip
            content={<CustomTooltipActivity />}
            cursor={{ opacity: 0.4 }}
          />
          <CartesianGrid
            strokeDasharray="2 2" //Taille des traits de mesures en horizontal mais pas verstical
            horizontal={true}
            vertical={false}
          />
          <Bar
            yAxisId={0} //barre le premier (a gauche)
            dataKey="kilogram" //la barre verticale celle en KG
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
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
Activity.propTypes = {
  activity: PropTypes.array.isRequired,
}

export default Activity
