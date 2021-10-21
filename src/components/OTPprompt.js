import React from 'react'
import {Link} from 'react-router-dom'
import newcmd from '../assets/newcmd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';

const OTPprompt = () => {
    return (
        <div className="container" id="OTPpromptParentContainer">
            <div id="OTPpromptChildContainer" >
                <div>
                    <img src={ newcmd } alt="" srcset="" />
                </div>
             <div>
                    <h4>Account Verification</h4>
            </div>
            <div class="col-12" id="OTPcode">
                <label style={{color: '#fff'}}>Accoount Verification Code</label>
                <input type="number" class="form-control" name="" placeholder="6-digit code" id=""/>
            </div>
            <Link to="/SignIn" className="btn btn-block text-center">
                <span className="btn btn-block" id="verifyBtn"> Verify</span>
            </Link>    
            <p><FontAwesomeIcon icon={faEnvelope}/>  We just sent your authentication code via email if 
            you did not see the code in your mail box check you spam messages
            *if you didn't get the code pls click the link <span style={{ color:"#f8c247", cursor:"hand" }}>Resend code</span> </p>
            </div>
            
        </div>
    )
}


export default OTPprompt
