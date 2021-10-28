import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import newcmd from '../assets/newcmd.png'
import ViewProfile from './ViewProfile';

// eslint-disable-next-line
// let userData = JSON.parse(localStorage.getItem("user"))

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const historyRoute = useHistory();


    const handleLogin = e => {
        e.preventDefault();

        const loginUserEmailEndpoint = 'cmd/users/loginByEmail/'+email

        console.log(loginUserEmailEndpoint)

            axios.post(loginUserEmailEndpoint, password, {headers: { "Content-Type": "text/plain" }})
        .then(res =>{
            console.log(res.status)
            if(res.status === 200){
                console.log("Loged In")
                historyRoute.push("/")
            }
            console.log(res.data)
            let locaclStorageData = localStorage.setItem('user', JSON.stringify(res.data));
            <ViewProfile locaclStorageData={locaclStorageData}/>;
        }).catch(err=>{
            setLoginError("Incorrect email or password")
        })
       
        
    }

    

    return (
    <>
        <section className="form" style={{marginTop: '6rem'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" id="image">
                        <img src={ newcmd } className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={ handleLogin }>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                    <h2>LOGIN</h2>
                                </div>
                                <p className="text-danger">{ loginError }</p>
                                <div className="col-12" id="user">
                                    <label>Email</label>
                                    <input type="text" className="form-control"
                                    value={ email } onChange={e => setEmail(e.target.value)} placeholder="johndoe@gmail.com" />
                                </div>
                                <div className="col-12" id="pass">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control"
                                    value={ password } onChange={e => setPassword(e.target.value)} placeholder="********" />
                                </div>
                                <button type="submit" className="btn btn-block" id="login_btn">Login</button>
                                <div className="col-12 text-center" id="fgPass">
                                    <Link to="#" id="formLinks">Forgot Password</Link><br/>
                                </div>
                                <div className="col-12 text-center" id="reg">
                                    <p>Don't have an account? <Link to="/Form" id="formLinks">Sign Up</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default SignIn