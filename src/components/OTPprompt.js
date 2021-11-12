import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import newcmd from '../assets/newcmd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CreatePassword from './CreatePassword';


const OTPprompt = () => {
    const [input, setInput] = useState('')
    const [errorOTP, setErrorOTP] = useState('')
    const historyRoute = useHistory()

    const handleVerify = (e) => {
        let userData = JSON.parse(localStorage.getItem("user"))
        const verifyUserEmailEndpoint = 'updateUser/'+userData.id;
        e.preventDefault();

        if(input === ""){
            setErrorOTP("Pls Input the OTP sent to you")
        }else if(input !== userData.otp){
            setErrorOTP("Incorrect OTP")
        }else{
            axios.put(verifyUserEmailEndpoint, userData)
            .then(response => {
                userData = response.data;
                localStorage.setItem('user', JSON.stringify(userData))
                userData.isEmailVerified = true
                console.log(userData)
        });
        historyRoute.push('/CreatePassword')
        }
    };

    <CreatePassword locaclStorageData={localStorage.getItem('user')}/>

    if(localStorage.getItem('user') === null){
        const viewProfile = document.getElementsByClassName('viewProfile')
        // viewProfile.classList.add("btn disabled")
    }else{
        console.log("Loacal storage has an item")
    }

    return (
        <div className="container" id="OTPpromptParentContainer">
            <div id="OTPpromptChildContainer" >
                <div>
                    <img src={ newcmd } alt="" />
                </div>
             <div>
                    <h4>Account Verification</h4>
            </div>

            <form onSubmit={ handleVerify }>
            <div className="col-12" id="OTPcode">
            <p style={{ color: "red" }} className="text-center">{ errorOTP }</p>
                <label style={{color: '#fff'}}>Accoount Verification Code</label>
                <input type="number" className="form-control" name="" placeholder="6-digit code" id=""
                value={input} onChange={e => setInput(e.target.value)}/>
            </div>
            <input type="submit"  className="btn btn-block my-2" id="verifyBtn" value="Register" />
            <p><FontAwesomeIcon icon={faEnvelope}/>  We just sent your authentication code via
             email if you did not see the code in your mail box check you spam messages</p>
             <Link to="/SignIn">
             <p style={{ color:"#f8c247" }}>Re-send OTP</p>
             </Link>
            </form>
            </div>
            
        </div>
    )
}


export default OTPprompt
