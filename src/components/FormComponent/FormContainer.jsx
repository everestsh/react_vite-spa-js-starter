// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";

// function FormContainer() {
//     return (
//         <div>
//             <h1>FormComponenter 1</h1>
//         </div>
//     )
// }
// export default FormContainer;

const FormContainer = () => {
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");

    return (
        <form>
            <FormInput
                placeholder="User Name"
                labelId="Email"
                value={userEmail}
            />
            <FormInput
                placeholder="Password"
                labelId="Password"
                value={userPassword}
            />
            <FormButton
                classType="primary"
                buttonText="Click"
            />
            <h1>FormComponenter 1</h1>
        </form>
    );
};

export default FormContainer;