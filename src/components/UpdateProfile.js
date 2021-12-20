
    import React, { useState } from 'react';
    import { trackPromise } from 'react-promise-tracker';
    import { useHistory } from 'react-router-dom'
    import Spinner from './Spinner'
    import axios from 'axios'
    
    // const phoneRegex = /^\+?\d+$/
    
    const UpdateProfile = ( props ) => {
    
        let userData = props.locaclStorageData;
        userData = JSON.parse(localStorage.getItem("user"))

        console.log(localStorage.getItem('user'))
    
        const updateUserEndpoint = 'updateUser/'+userData.id;
        console.log(updateUserEndpoint)
        const id = userData.id;
    
        const [emailError, setEmailError] = useState("");
        const historyRoute = useHistory();
    
        const [fname, setFname] = useState("");
        const [lname, setLname] = useState("");
        const [email, setEmail] = useState("");
        const [dateOfBirth, setDob] = useState("");
        const [phone, setPhone] = useState("");
        const [gitHubLink, setgitHubLink] = useState("");
        const [techTrack, setTechTrack] = useState("");
        const [linkedInLink, setlinkedInLink] = useState("");
    
        const updatedValues = {
                id,
                fname,
                lname, 
                email,
                phone, 
                techTrack,
                dateOfBirth,
                gitHubLink,
                linkedInLink,
        }
        const updateProfile = (e) =>{
            trackPromise(
                axios.put(updateUserEndpoint, updatedValues)
                .then((res) => {
                    console.log(res)
                    if(res.status === 500){
                        setEmailError("Email already exist")
                    }else{
                        localStorage.setItem('user', JSON.stringify(res.data))
                        historyRoute.push('/OTPEmailUpdatePrompt')
                    }
                        }).catch( err => setEmailError("Email already exist"))
                    )
                        e.preventDefault()
                    }
        
      return (
    
          <section className="form" style={{ marginTop: '6rem' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="form-row">
                            <div className="col-12 mb-3">
                                <h2>Update Profile</h2>
                            </div>
                            <span className="text-danger">{ emailError }</span>
                        </div>
    
                        <form onSubmit={ updateProfile }>
                            <div className="col-12" id="userReg">
                                <label>First Name</label><br />
                                <input name="fname" value={fname} onInput = {e => setFname(e.target.value)} type="text" className="form-control" required/>
                            </div>
    
                            <div className="col-12" id="userReg">
                                <label>Last Name</label><br />
                                <input name="lname" value={lname} onInput = {e => setLname(e.target.value)} type="text" className="form-control" required/>
                            </div>
    
                            <div className="col-12" id="userReg">
                                <label>Date of Birth</label><br />
                                <input name="dob" value={dateOfBirth} onChange = {e => setDob(e.target.value)} type="date" className="form-control" required/>
                            </div>
    
                            <div className="col-12" id="emailReg">
                            <label>Email</label><br />
                                <input name="email" value={email} onChange = {e => setEmail(e.target.value)} type="email" className="form-control" />
                            </div>
    
                            <div className="col-12" id="emailReg">
                            <label>Phone</label><br />
                                <input name="phone" value={phone} onChange = {e => setPhone(e.target.value)} type="text" className="form-control" required/>
                            </div>
    
                            <div className="col-12" id="emailReg">
                            <label>Tech Track</label><br />
                                <input name="techTrack" value={techTrack} onChange = {e => setTechTrack(e.target.value)} type="text" className="form-control" required/>
                            </div>
    
                            <div className="col-12" id="emailReg">
                            <label>Github Link</label><br />
                                <input name="github" value={gitHubLink} onChange = {e => setgitHubLink(e.target.value)} type="text" className="form-control" required/>
                            </div>
    
                            <div className="col-12" id="emailReg">
                            <label>LinkedIn Link</label><br />
                                <input name="linkedIn" value={linkedInLink} onChange = {e => setlinkedInLink(e.target.value)} type="text" className="form-control" required/>
                            </div>
    
                            <div className="col-12 text-center" id="signInReg">
                                <input type="submit"  className="btn btn-block my-3" id="registerBtn" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
                    <Spinner />
                </div>
            </section>
      );
    };
      
    export default UpdateProfile;