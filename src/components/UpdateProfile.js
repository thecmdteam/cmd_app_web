import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { trackPromise } from 'react-promise-tracker';
import { useHistory } from 'react-router-dom'
import Spinner from './Spinner'
// import CreatePassword from './CreatePassword';




const SignUpForm = ( props ) => {

    const phoneRegex = /^\+?\d+$/

    let userData = props.locaclStorageData;
    userData = JSON.parse(localStorage.getItem("user"))
    console.log(localStorage.getItem('user'))
    const updateUserEndpoint = 'https://cmd-backend.herokuapp.com/cmd/users/'+ userData.id;
    console.log(updateUserEndpoint)

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
          .max(15, 'Must be 15 characters or less'),
          lname: Yup.string()
          .max(20, 'Must be 20 characters or less'),
          email: Yup.string()
          .email('Invalid email address'),
          phone: Yup.string().matches(phoneRegex, 'Phone number is not valid'),
          techTrack: Yup.string(),
      })}

      onSubmit={(values) => {
        trackPromise(
            fetch(updateUserEndpoint, {
                method: 'PUT',
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
                            if(userData.email === data.email){
                                setEmailError("Email already exist")
                            }else{
                                localStorage.setItem('user', JSON.stringify(data));
                                console.log(localStorage.getItem('user'))
                                historyRoute.push('/ViewProfile')
                            }
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
                <div className="col-12">
                    <div className="form-row">
                        <div className="col-12 mb-3">
                            <h2>Update Profile</h2>
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

                    <div className="col-12" id="emailReg">
                    <label>Tech Track</label><br />
                        <Field name="techTrack" type="text" className="form-control"/>
                        <div className="text-danger">
                            <ErrorMessage name="techTrack" />
                        </div>
                    </div>

                    <div className="col-12 text-center" id="signInReg">
                        <input type="submit"  className="btn btn-block my-3" id="registerBtn" value="Update" />
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