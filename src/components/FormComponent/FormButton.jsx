// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

// function FormButton() {
//     return (
//         <div>
//             <h1>Welcome </h1>
//         </div>
//     )
// }
const FormButton = (props) => {
    return (
        <button
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