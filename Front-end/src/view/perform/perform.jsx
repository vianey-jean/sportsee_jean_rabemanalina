import React from 'react';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 * View - RadarChart Graph of performance
 * @param {Object[]}  userPerform - The different types of performances
 * @param {number}  userPerform[].value - Performance values
 * @param {number}  userPerform[].kind - Types of performances
 * @returns {React.ReactElement} JSX.Element - Graph of performance
 */
const Performances = ({ performance }) => {
  //console.log(performance)
  return (
    <div className='performancesChart'>
      <ResponsiveContainer width='100%' aspect={1}>
        <RadarChart
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          style={{ backgroundColor: '#282D30' }}
          data={performance}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey='kind'
            tickLine={false}
            axisLine={false}
            dy={5}
            stroke='#FFF'
            tick={{ fill: '#FFFFFF', fontSize: 12 }}
          />
          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
          <Radar dataKey='value' fill='#FF0101' fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performances;

//Proptypes
Performances.propTypes = {
  performance: PropTypes.array.isRequired,
};
