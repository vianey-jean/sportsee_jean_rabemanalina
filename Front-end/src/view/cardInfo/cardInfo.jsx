import React from 'react';
import PropTypes from 'prop-types';

import './_cardInfo.scss';

/** Card info view
 * @component
 * @param {String} image - icons
 * @param {Integer} data - value number
 * @param {String} unit - unit
 * @param {String} text - macronutrient text
 * @returns {JSX.Element} cards view
 */

const MacronutrientCard = ({ icon, data, unit, text }) => {
  return (
    <div className='cardInfoContainer'>
      <div className="imgContainer" >
        <img src={icon} alt="icone" />
      </div>
      <div >
      <p className="numberAndUnit">
          {data}
          {unit}
          </p>
        <p className='type'>{text}</p>
      </div>
    </div>
  );
};

export default MacronutrientCard;

//Proptypes
MacronutrientCard.propTypes = {
  icon: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
