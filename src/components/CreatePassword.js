import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CreatePassword = ( props ) => {
    
    let userData = props.locaclStorageData;
    userData = JSON.parse(localStorage.getItem("user"))
    console.log(localStorage.getItem('user'))
    const changePasswordEndPoint = 'users/setPassword/'+userData.id;
    let regExpForPassword =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [passWordCheck, setpassWordCheck] = useState('')
    const historyRoute = useHistory()

    const passwordCreated = (e) =>{
        e.preventDefault();
        if(password === "" & confirmPassword === ""){
            setpassWordCheck("The fields are empty")
        }else if(password !== confirmPassword){
            setpassWordCheck("The two fields didn't match")
        }else if(!password.match(regExpForPassword) && !confirmPassword.match(regExpForPassword)){
            setpassWordCheck("Pls use a password between 8 to 15 characters which contain at least one"+
            "lowercase letter, one uppercase letter, one numeric digit, and one special character")
        }else{

            console.log("All inputs are valid")

            axios.post(changePasswordEndPoint, ''+password, {headers: {'Content-Type': 'text/plain'}})
            .then(response => {
            userData = response.data;
            console.log(response.data);
            historyRoute.push('/SignIn')
        });
        }

        console.log(password)
        console.log(confirmPassword)
    }

        return (
            <div>
                <h2 style={{marginTop: '6rem'}}>Create Password Page</h2>
                <form onSubmit = {passwordCreated}>
                    <div className="col-12" id="userReg">
                        <label htmlFor="">Password</label>
                        <input className="form-control" value={ password } onChange={e =>setPassword(e.target.value)} placeholder="********" type="password"/>
                        <label htmlFor="">Confirm Password</label>
                        <input className="form-control" value={ confirmPassword } onChange={e =>setconfirmPassword(e.target.value)} placeholder="********" type="password"/>
                        <input type="submit"  className="btn btn-block" id="createPasswordBtn" value="Create Password" />
                        <p style={{ color: "red" }} className="text-center">{ passWordCheck }</p>
                    </div>
                </form>
            </div>
        )
}

export default CreatePassword
