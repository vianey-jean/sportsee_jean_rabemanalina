import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
} from 'recharts';
import PropTypes from 'prop-types';

import './_averageSession.scss';

/**
 * View - LineChart Graph of session Longer
 * @param {object[]} average user’s average session data
 * @param {Number} average[].day Day of the week
 * @param {Number} average[].sessionLength Session duration
 * @returns {React.ReactElement} JSX.Element - average session chart
 */

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className='customTooltipSession'>
        <p className='tooltipDataSession'>{`${payload[0].value} `}min</p>
      </div>
    );
  }
  return null;
};
/**
 * @returns a grey rectangle displayed with mouth moving over the chart
 */
const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill='#000000'
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  );
};

/**
 * Display user's daily activity charts
 * @component
 * @param {Array} sessions - user sessions datas
 * @returns {JSX.Element} SessionsGraph component
 */

const AverageSessionTime = ({ sessions }) => {
  return (
    <div className='sessionChart'>
      <ResponsiveContainer height="68%" width='100%' aspect={1}>
        <LineChart
          style={{ backgroundColor: '#FF0000' }}
          width={258}
          height={263}
          data={sessions}
          margin={{
            top: 50,
            right: -2,
            left: -60,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="day"
            tick={{ fill: 'white', opacity: '.7' }}
            tickLine={false}
            tickMargin={5}
            interval="preserveStartEnd"
            axisLine={false}
          />
          <YAxis
           domain={['dataMin-10', 'dataMax+5']} stroke="none" 
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="natural" //type du trail natural
            dataKey="sessionLength" //donné vient sessionlength
            scale="band"
            stroke="white" //couleur en blanc
            strokeWidth={2}
            dot={false}
            activeDot={{
              //taille de valeur et couleur en blanc
              fill: 'white',
              strokeOpacity: '.5',
              strokeWidth: '10',
              r: 4,
            }}
            unit=" min"
          />
          <text
            className='graphTitle'
            x='12%'
            y='15%'
            width={147}
            height={48}
            textAnchor='start'
            dominantBaseline='middle'
            fill='#FFFFFF'
            style={{ fontWeight: 500, opacity: 0.5 }}
          >
            Durée moyenne des{' '}
          </text>
          <text
            className='graphTitle'
            x='12%'
            y='25%'
            width={147}
            height={48}
            textAnchor='start'
            dominantBaseline='middle'
            fill='#FFFFFF'
            style={{ fontWeight: 500, opacity: 0.5 }}
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionTime;

//Proptypes
AverageSessionTime.propTypes = {
  sessions: PropTypes.array.isRequired,
};
