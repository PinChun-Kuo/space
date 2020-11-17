import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes, content }) => (
  <div className={`computer-button ${classes}`}>
    {content}
  </div>
)

Button.propTypes = {
  classes: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default Button;
