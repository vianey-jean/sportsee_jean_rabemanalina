import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';

import './_activity.scss';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='customTooltip'>
        <p className='tooltipData'>{`${payload[0].value} `}g</p>
        <p className='tooltipData'>{`${payload[1].value} `}Kcal</p>
      </div>
    );
  }
};

/**
 * View - BarChart Graph of Daily activity
 * @param {Object[]} activityValues user's physical activity data
 * @param {String} activityValues[].day
 * @param {Number} activityValues[].kilogram - array activity on kg
 * @param {Number} activityValues[].calories - array activity on kcal
 * @returns {React.ReactElement} JSX.Element - physical activity chart
 * @see https://recharts.org/en-US/api/Barchart
 */

const DailyActivity = ({ activityValues }) => {
  // console.log(activityValues);

  return (
    <div className='activityGraph'>
      <BarChart
        width={835}
        height={320}
        data={activityValues}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={7}
        barGap={8}
        barCategoryGap={54}
      >
        {' '}
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
          tickLine={false}
          orientation='right'
          axisLine={false}
          tick={{ fill: '#9B9EAC', fontWeight: 500, fontSize: 14 }}
          tickMargin={45}
          minTickGap={27}
        />
        <Tooltip content={CustomTooltip}
        cursor={{ opacity: 0.4 }}
         />
        <Legend // change styles in formatter for the Bar component text
          verticalAlign='top'
          align='right'
          iconType={'circle'}
          iconSize={8}
          width={277}
          height={25}
          wrapperStyle={{ top: 35, right: 26 }}
          formatter={(value) => {
            return (
              <span style={{ color: '#74798c', fontSize: 14, fontWeight: 500 }}>
                {value}
              </span>
            );
          }}
        />
      <Bar
            dataKey="kilogram" //la barre verticale celle en KG
            fill="#282D30" //sa couleur
            barSize={7} //taille
            radius={[3, 3, 0, 0]} //radius
            unit=" kg" //unité
            name="Poids (kg)"
          />

          <Bar
            dataKey="calories" //la barre horizontale en calorie
            fill="#E60000" // sa couleur
            barSize={7} // sa taille
            radius={[3, 3, 0, 0]} //radius
            unit=" Kcal" //unite
            name="Calories brûlées (kCal)"
          />
        <text
          className='graphTitle'
          x='5%'
          y='15%'
          width={147}
          height={48}
          textAnchor='start'
          dominantBaseline='middle'
          fill='#20253A'
          style={{ fontWeight: 500 }}
        >
          Activité quotidienne{' '}
        </text>
      </BarChart>
    </div>
  );
};

export default DailyActivity;
//Proptypes
DailyActivity.propTypes = {
  activityValues: PropTypes.array.isRequired,
};
