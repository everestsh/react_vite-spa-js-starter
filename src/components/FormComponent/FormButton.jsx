// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";


const FormButton = (props) => {

    return (
        <button
            onClick={props.handleButtonClick}
            className={props.classType || "primary"}
        >
            {props.buttonText}
        </button>
    );
};

FormButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    classType: PropTypes.string, // Added classType to propTypes
    handleButtonClick: PropTypes.func,
};
export default FormButton;