// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import FormComponent from "./FormComponent";
// import FormComponenter from "./FormComponent/FormContainer.jsx";
// import FormButton from "./FormComponent/FormButton.jsx"
import '../styles/App.css'

function App() {
  return (
    <div>
        <h1>Welcome to Sites</h1>
        {/*<FormButton></FormButton>*/}
        {/*<FormComponenter />*/}
        <FormComponent />
    </div>
  )
}
export default App
