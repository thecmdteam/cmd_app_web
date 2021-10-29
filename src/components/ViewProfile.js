import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEdit, faAngleLeft, faTrash, faMobileAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ViewProfile = (props) => {

    const historyRoute = useHistory();

    let userData = props.locaclStorageData;
    userData = JSON.parse(localStorage.getItem("user"))
    console.log(userData.id)

    const deleteUserAccountEndpoint = 'cmd/users/'+userData.id;
    console.log(deleteUserAccountEndpoint)

    const deleteAccount = () =>{
        axios.delete(deleteUserAccountEndpoint)
            .then(res => { console.log(res)})
        localStorage.clear()
        historyRoute.push('/')
    }
    
    return (
        <div>
            <h2 style={{marginTop: '6rem'}}>Profile</h2>
            <div className="container" id="viewProfile">

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <p><img src={ userData.imageUrl } alt="Users Profile Pic" className="mt-3 mb-3"/></p>
                    </div>
                    
                    <div className="col-lg-6 col-sm-12">
                        <span><FontAwesomeIcon className="mr-2 fa-2x" icon={ faUser }/>First Name</span>
                        <p className="mt-2 mb-4">
                            <strong style={{ fontSize:"30px" }}>{ userData.fname }</strong>
                        </p>

                        <span><FontAwesomeIcon className="mr-2 fa-2x" icon={ faUser }/>Last Name</span>
                        <p className="mt-2 mb-4">
                            <strong style={{ fontSize:"30px" }}>{ userData.lname }</strong>
                        </p>

                        <span><FontAwesomeIcon className="mr-2 fa-2x" icon={ faEnvelope }/>Email Address</span>
                        <p className="mt-2 mb-4">
                            <strong style={{ fontSize:"30px" }}>{ userData.email }</strong>
                        </p>

                        <span><FontAwesomeIcon className="mr-2 fa-2x" icon={ faMobileAlt }/>Mobile Number</span>
                        <p className="mt-2 mb-4">
                            <strong style={{ fontSize:"30px" }}>{ userData.phone }</strong>
                        </p>

                        <span><FontAwesomeIcon className="mr-2 fa-2x" icon={ faLaptopCode }/>Tech Track</span>
                        <p className="mt-2 mb-4">
                            <strong style={{ fontSize:"30px" }}>{ userData.techTrack }</strong>
                        </p>
                    </div>
                </div>

                <div id="updateDelBack">
                    <div className="btn btn-secondary">
                        <FontAwesomeIcon className="mr-2 fa-1x" icon={ faAngleLeft }/>Back
                    </div>
                    <div className="btn btn-info mx-5" >
                        <FontAwesomeIcon className="mr-2 fa-1x" icon={ faEdit }/>Update
                    </div>
                    <div className="btn btn-danger" onClick={ deleteAccount }>
                        <FontAwesomeIcon className="mr-2 fa-1x" icon={ faTrash }/>Delete
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ViewProfile
