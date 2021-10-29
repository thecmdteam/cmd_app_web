import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { trackPromise } from 'react-promise-tracker';
import { Link, useHistory } from 'react-router-dom'
import Spinner from './Spinner'
import Newcmd from '../assets/newcmd.png'
// import CreatePassword from './CreatePassword';

const phoneRegex = /^\+?\d+$/
const postUserEndpoint = 'https://cmd-backend.herokuapp.com/cmd/users';

const SignUpForm = () => {

    const [emailError, setEmailError] = useState("");
    const historyRoute = useHistory()

  return (
    <Formik
      initialValues={{
            fname: '',
            lname: '', 
            email: '',
            phone: '', 
            techTrack:'' 
        }}

      validationSchema={Yup.object({
        fname: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('This field is Required'),
          lname: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('This field is Required'),
          email: Yup.string()
          .email('Invalid email address')
          .required('Email field is required'),
          phone: Yup.string().matches(phoneRegex, 'Phone number is not valid')
          .required("This field is required"),
          techTrack: Yup.string()
          .required("This field is required"),
      })}

      onSubmit={(values) => {
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
                    if(res.status === 500){
                        setEmailError("Email already exist")
                    }else{
                        historyRoute.push('/OTPprompt')
                    }
                    res.json()
                        .then((data) => {
                            console.log(data);
                            localStorage.setItem('user', JSON.stringify(data));
                            console.log(localStorage.getItem('user'))
                        })}).catch((err) => {
                            console.log(err)
                        })
                        )
      }}
    >

     {/* <CreatePassword locaclStorageData={localStorage.getItem('user')}/>; */}

      <Form>
      <section className="form" style={{ marginTop: '6rem' }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6" id="image">
                    <img src={Newcmd} alt="theCmdLogo" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                    <div className="form-row">
                        <div className="col-12 mb-3">
                            <h2>Register</h2>
                        </div>
                        <span className="text-danger">{ emailError }</span>
                    </div>

                    <div className="col-12" id="userReg">
                        <label>First Name</label><br />
                        <Field name="fname" type="text" className="form-control"/>
                        <div className="text-danger">
                            <ErrorMessage name="fname" />
                        </div>
                    </div>

                    <div className="col-12" id="userReg">
                        <label>Last Name</label><br />
                        <Field name="lname" type="text" className="form-control"/>
                        <div className="text-danger">
                            <ErrorMessage name="lname" />
                        </div>
                    </div>

                    <div className="col-12" id="emailReg">
                    <label>Email</label><br />
                        <Field name="email" type="email" className="form-control"/>
                        <div className="text-danger">
                            <ErrorMessage name="email" />
                        </div>
                    </div>

                    <div className="col-12" id="emailReg">
                    <label>Phone</label><br />
                        <Field name="phone" type="text" className="form-control"/>
                        <div className="text-danger">
                            <ErrorMessage name="phone" />
                        </div>
                    </div>

                    <div className="col-12" id="userReg">
                        <label>Tech Track</label><br />
                        <Field name="techTrack" as="select" className="my-select form-control">
                            <option value="Other">Other</option>
                            <option value="Front End Developer">Front End Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Mobile">Mobile</option>
                            <option value="UI/UX">UI/UX</option>
                            <option value="Full Stack">Full Stack</option>
                        </Field>
                        <div className="text-danger">
                                <ErrorMessage name="techTrack" />
                        </div>
                    </div>

                    <div className="col-12 text-center" id="signInReg">
                        <input type="submit"  className="btn btn-block my-3" id="registerBtn" value="Register" />
                        <p style={{color:'#2c3e50'}}>Alraedy have an account? <Link to="/SignIn" id="formLinks">Sign In</Link></p>
                    </div>
                </div>
            </div>
                <Spinner />
            </div>
        </section>
      </Form>
    </Formik>
  );
};

export default SignUpForm;