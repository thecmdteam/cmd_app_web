import axios from 'axios';
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import newcmd from '../assets/newcmd.png'



const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = e => {
        e.preventDefault();

        const loginUserEmailEndpoint = 'cmd/users/loginByEmail/'+email

        console.log(loginUserEmailEndpoint)

        // axios.post(loginUserEmailEndpoint, { password })
        // .then(res => {
        //     console.log(res)
        // }).catch((err) => {
        //     console.log(err)
        // })

        axios({
            method: 'POST',
            url: loginUserEmailEndpoint,
            headers: { "Content-Type": "text/plain" },
            data: password
        }).then(res => {console.log(res)})
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
                                    <Link to="#">Forgot Password</Link><br/>
                                </div>
                                <div className="col-12 text-center" id="reg">
                                    <p>Don't have an account? <Link to="/Form">Sign Up</Link></p>
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
