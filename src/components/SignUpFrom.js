import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Newcmd from '../assets/newcmd.png'
import { useFormik } from 'formik';
import { trackPromise } from 'react-promise-tracker';
import Spinner from './Spinner'

const postUserEndpoint = 'https://cmd-backend.herokuapp.com/cmd/users';

const validate = values => {
    const errors = {};

    if (!values.fname) {
        errors.fname = 'This field is Required';
    } else if (values.fname.length > 15) {
        errors.fname = 'Must be 15 characters or less';
    }

    if (!values.lname) {
        errors.lname = 'This field is Required';
    } else if (values.lname.length > 20) {
        errors.lname = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Email field is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Pls provide a valid email address you idiot';
    }

    if (!values.phone) {
        errors.phone = 'Phone number is Required';
    } else if (!/^\+?\d+$/i.test(values.phone)) {
        errors.phone = 'Pls provide a valid phone number';
    }

    return errors;
};

const SignUpForm = () => {

    const [state, setState] = useState(false);
    const historyRoute = useHistory()

    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            phone: '',
        },
        validate,
        onSubmit: values => {

            trackPromise(
                fetch(postUserEndpoint, {
                    mode: "cors",
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body:
                        JSON.stringify(values)
                })
                    .then((res) => {
                        console.log(res)
                        res.json()
                            .then((data) => {
                                console.log(data);
                                localStorage.setItem('user', JSON.stringify(data));
                                console.log(data)
                                historyRoute.push('/OTPprompt')
                            })}).catch((err) => {
                                console.log(err)
                            }))

                Array.from(document.querySelectorAll(".impsClr"))
                    .forEach(input => (input.value = ""));
            setState({
                values: [{}]
            });
            console.log(state)
        },
    });

    return (
        <div>
            <section className="form" style={{ marginTop: '6rem' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" id="image">
                            <img src={Newcmd} alt="theCmdLogo" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className="form-row">
                                    <div className="col-12 mb-3">
                                        <h2>Register</h2>
                                    </div>

                                    <div className="col-12" id="userReg">
                                        <label htmlFor="">First Name</label>
                                        <input className="form-control impsClr" placeholder="John"
                                            id="fname"
                                            name="fname"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.fname}
                                        />
                                        {formik.touched.fname && formik.errors.fname ? (
                                            <div className="text-danger">{formik.errors.fname}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-12" id="userReg">
                                        <label htmlFor="">Last Name</label>
                                        <input className="form-control impsClr" placeholder="Doe"
                                            id="lname"
                                            name="lname"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.lname}
                                        />
                                        {formik.touched.lname && formik.errors.lname ? (
                                            <div className="text-danger">{formik.errors.lname}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-12" id="emailReg">
                                        <label htmlFor="">Email</label>
                                        <input className="form-control impsClr" placeholder="johndoe@gmail.com"
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-danger">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-12" id="emailReg">
                                        <label htmlFor="">Phone Number</label>
                                        <input className="form-control impsClr" placeholder="08012345678"
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.phone}
                                        />
                                        {formik.touched.phone && formik.errors.phone ? (
                                            <div className="text-danger">{formik.errors.phone}</div>
                                        ) : null}
                                    </div>

                                    <div className="col-12" id="userReg">
                                        <label htmlFor="">Tech Track</label>
                                        <select className="form-control" >
                                            <option value="Front End Developer">Front End Developer</option>
                                            <option value="Back End Developer">Backend Developer</option>
                                            <option value="Mobile">Mobile</option>
                                            <option value="UI/UX">UI/UX</option>
                                            <option value="Full Stack">Full Stack</option>
                                        </select>
                                    </div>
                                    <div className="col-12 text-center" id="signInReg">
                                    <input type="submit"  className="btn btn-block" id="registerBtn" value="Register" />
                                        <p>Alraedy have an account? <Link to="/SignIn"><span>Sign In</span></Link></p>
                                    </div>
                                    <Spinner />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUpForm