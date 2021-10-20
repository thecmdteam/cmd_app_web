import React from 'react'
import {Link} from 'react-router-dom'
import newcmd from '../assets/newcmd.png'

const SignIn = () => {
    return (
    <>
        <section className="form" style={{marginTop: '6rem'}}>
            <div claclassName="container">
                <div className="row">
                    <div className="col-lg-6" id="image">
                        <img src={ newcmd } className="img-fluid" alt="" srcset="" />
                    </div>
                    <div className="col-lg-6">
                        <form action="">
                            <div className="form-row">
                                <div class="col-12 mb-3">
                                    <h2>LOGIN</h2>
                                </div>
                                <div className="col-12" id="user">
                                    <label htmlFor="">Email</label>
                                    <input type="text" class="form-control" name="" placeholder="John Doe" id="" />
                                </div>
                                <div className="col-12" id="pass">
                                    <label htmlFor="">Password</label>
                                    <input type="password" class="form-control" name="" placeholder="********" id="" />
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
