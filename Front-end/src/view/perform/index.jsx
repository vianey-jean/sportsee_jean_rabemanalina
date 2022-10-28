import React from 'react'
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
} from 'recharts'
import './_perform.scss'
import PropTypes from 'prop-types'

/**
 * View - RadarChart Graph of performance
  * @param {Object[]}  userPerform - The different types of performances
 * @param {number}  userPerform[].value - Performance values
 * @param {number}  userPerform[].kind - Types of performances
 * @returns {React.ReactElement} JSX.Element - Graph of performance
 */

const Perform = ({ performances }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={performances}>
        <Radar dataKey="value" fill="red" opacity={0.8} />
        <PolarGrid
          radialLines={false}
          fill="white"
          polarRadius={[5, 15, 35, 55, 75, 100]}
        />

        <PolarAngleAxis
          dataKey="kind"
          tick={{ fill: 'white', fontSize: '12', dy: 3 }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
Perform.propTypes = {
  performances: PropTypes.array.isRequired,
}

export default Perform
