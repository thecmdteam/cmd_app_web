import React, { useState } from 'react'
import SignUpFrom from '../components/SignUpFrom'
import OTPprompt from '../components/OTPprompt'

const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{
        setFormIsSubmitted(true);
    };

    return (
        <div>
            { !formIsSubmitted ? <SignUpFrom submitForm={ submitForm }/> : <OTPprompt />}
        </div>
    )
}

export default Form
