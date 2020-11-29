import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ classes, content, disable, handleClick }) => (
  <div
    className={classNames(
      `computer-button ${classes}`,
      { 'computer-button--disable': disable }
    )}
    onClick={disable ? null : handleClick}
  >
    {content}
  </div>
)

Button.defaultProps = {
  disable: false
};

Button.propTypes = {
  classes: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  disable: PropTypes.bool.isRequired,
  handleClick: PropTypes.func
}

export default React.memo(Button);
