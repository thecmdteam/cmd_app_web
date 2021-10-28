import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import OTPprompt from '../components/OTPprompt'

const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{
        setFormIsSubmitted(true);
    };

    return (
        <div>
            { !formIsSubmitted ? <SignUpForm submitForm={ submitForm }/> : <OTPprompt />}
        </div>
    )
}

export default Form
