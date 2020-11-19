import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes, content, handleClick }) => (
  <div className={`computer-button ${classes}`} onClick={handleClick}>
    {content}
  </div>
)

Button.propTypes = {
  classes: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handleClick: PropTypes.func
}

export default Button;
