import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'  //import Recharts
import PropTypes from 'prop-types' //import proptypes
import './_score.scss'   //import scss

/**
 * Component - RadialChart Graph of todayScrore
 * @param {number} userScore - The score of the user
 * @returns {React.ReactElement} JSX.Element - Graph of score
 */


function Score({ userScore }) {
  const scorePercentage = [{ value: userScore * 100 }] //valeur du rond recu multiplie par cent
  const newScore = userScore * 100 // valeur en chiffre recu multiplie par cent

  return (
    <article className="score">
      <h2>Score</h2>

      <ResponsiveContainer width="100%" height={263}>  
        <RadialBarChart
          data={scorePercentage}  //donné score
          innerRadius={80} //innerradius
          barSize={10} //taille bar
          startAngle={80} //angle
          endAngle={440} //fin angle
          fill={'#FF0000'}  //couleur du trait en rouge
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} /> 
          <RadialBar dataKey="value" cornerRadius={5} background />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"  //mettre au milieu
            fontSize="26"
            fontWeight="700"
            fill="black" //couleur noir
          >
            {newScore}% {/**valeur en % */}
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle" //mettre au milieu
            fontSize="16"
            fill="gray" //couleur gris
            fontWeight="500"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </article>
  )
}

Score.propTypes = {
  userScore: PropTypes.number,
}

export default Score
