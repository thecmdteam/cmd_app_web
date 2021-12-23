import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faEdit, faAngleLeft, faTrash, faMobileAlt, faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import store from 'store'

const ViewProfile = (props) => {
    let userData = props.locaclStorageData;
    userData = JSON.parse(localStorage.getItem("user"))

    const { fname, lname, email, gitHubLink, linkedInLink, techTrack, phone, imageUrl, id } = userData;
    const historyRoute = useHistory();
    
    store.set('profilePic', imageUrl)
    const value = store.get("profilePic")
    console.log("Store item is ",value)
    

    const deleteUserAccountEndpoint = 'deleteUser/'+id;

    const deleteAccount = () =>{
        axios.delete(deleteUserAccountEndpoint)
            .then(res => { console.log(res)})
        localStorage.clear()
        historyRoute.push('/')
    }

    const updateHandler = () =>{
        historyRoute.push('/UpdateProfile')
    }

    // const deleteProfilePicEndpoint = 'https://cmd-fileservice.herokuapp.com/file/remove/6164731c4b6ed22a8e66f19b';

    // const deleteImage = async () =>{

    //     try{
    //         const res = await fetch(deleteProfilePicEndpoint, { method: 'DELETE', })
    //         console.log(res.status)
    //         const data = await res.text();
    //         console.log(data)

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const onFileChange = async (event) =>{

        const fileDetails = event.target.files[0]
        const formData = new FormData();
        formData.append('file', fileDetails);

        try{
            const response = await fetch('https://cmd-fileservice.herokuapp.com/file/upload', {
            method: "POST", 
            body: formData,
            })
            const data = await response.text();
            updateProfile(data)
        } catch (err) {
            console.log(err)
        }
    }

    const updateProfile =  (data) => {

        const imageUrl = store.set('profilePic', `https://cmd-fileservice.herokuapp.com/file/download/${data}`)

        axios.put(`https://cmd-backend.herokuapp.com/cmd/updateUser/${id}`, {
            id,fname,lname,gitHubLink,email,linkedInLink,phone,imageUrl
        }).then(res => {
            let user = res.data
            localStorage.setItem('user',JSON.stringify(user))
            window.location.reload()
        })

        console.log(userData)
    }

    

    <UpdateProfile locaclStorageData={localStorage.getItem('user')}/>;
    
    return (
        <div>

<h2 style={{marginTop: '6rem'}}><strong>Profile</strong></h2>
            <div className="container" id="viewProfile">

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img src={ imageUrl } alt="Users Profile Pic" className="mt-3 mb-3"/>

                        <label htmlFor="avatar">Choose a Profile Picture:</label>
                        <input type="file" id="avatar" name="avatar" onChange={onFileChange}/>
                    </div>
                    
                    <div className="col-lg-6 col-sm-12">
                        <div className="pb-4">
                            <h2><strong>Bio Data</strong></h2>
                        </div>
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
                            <strong style={{ fontSize:"30px" }}>{ techTrack }</strong>
                        </p>
                    </div>
                </div>
                <hr />

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="pb-4">
                                <h2><strong>Useful Links</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <span><FontAwesomeIcon className="mr-2 fa-2x" icon={ faMobileAlt }/>Github Link</span>
                            <p className="mt-2 mb-4">
                                <strong style={{ fontSize:"30px" }}>{ userData.gitHubLink }</strong>
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <span><FontAwesomeIcon className="mr-2 fa-2x" icon={ faMobileAlt }/>LinkedIn Link</span>
                            <p className="mt-2 mb-4">
                                <strong style={{ fontSize:"30px" }}>{ userData.linkedInLink }</strong>
                            </p>
                        </div>
                    </div>
                
                <div id="updateDelBack">
                    <div className="btn btn-secondary">
                        <FontAwesomeIcon className="mr-2 fa-1x" icon={ faAngleLeft }/>Back
                    </div>
                    <div className="btn btn-info mx-5" onClick={ updateHandler }>
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
