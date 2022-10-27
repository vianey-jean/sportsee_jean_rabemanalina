import React from 'react'
import { RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @param {object} userMainDatas user main datas
 * @returns {ReactComponentElement} radial bar chart of percentage of goal
 */
const Score = ({ userMainDatas }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        data={userMainDatas.scores}
        innerRadius={50} //innerradius
        barSize={10} //taille bar
        startAngle={80} //angle
        endAngle={440} //fin angle
        fill={'#FF0000'}  //couleur du trait en rouge
      >
       <circle cx="50%" cy="50%" fill="gray" r="80"></circle>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <circle cx="50%" cy="50%" fill="white" r="70"></circle>
        
        <RadialBar clockWise cornerRadius={10} fill="#FF0000" dataKey="score" />
      
      </RadialBarChart>
    </ResponsiveContainer>
  )
}
Score.propTypes = {
  userMainDatas: PropTypes.object.isRequired,
}
export default Score
