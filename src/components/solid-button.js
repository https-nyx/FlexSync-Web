import React from "react";

import PropTypes from "prop-types";

import "./solid-button.css";

const SolidButton = (props) => {
  return (
    <div className={`solid-button-container ${props.rootClassName}`}>
      <button
        className="solid-button-button button Button"
        onClick={props.onClick}
      >
        {props.button}
      </button>
    </div>
  );
};

SolidButton.defaultProps = {
  rootClassName: "",
  button: "Button",
};

SolidButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  onClick: PropTypes.func, // Added propType for onClick
};

export default SolidButton;
