import React from 'react';
import newcmd from '../assets/newcmd.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignInAlt, faDoorOpen, faUserCircle, faEye, faPenAlt, faHome, faBell, faSearch, faPlusSquare, faClone } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom'
import ViewProfile from './ViewProfile';

const Navbar = (props) => {
    const historyRoute = useHistory();

    let userData = props.locaclStorageData;
    userData = JSON.parse(localStorage.getItem("user"))

    const signOut = () =>{
        localStorage.removeItem('user');
        historyRoute.push('/')
        window.location.reload()
    }

    <ViewProfile locaclStorageData={localStorage.getItem('user')}/>;

        return (
            <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/" id="hover">
                        <img src={newcmd} alt="TheCmdLogo" className='mr-5'  style={{ width: '10rem'}}/>
                    </Link>
                    <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div id="menuBar">
                            <FontAwesomeIcon icon={faBars}/>
                            <h5 id="navBarToggler">Menu</h5>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mt-2">
                            <Link className="nav-link active" to="/" id="hover">
                                <FontAwesomeIcon className="mr-2 fa-2x" id='navIcons' icon={ faHome }/>
                                {/* <div className='hide'>Home</div> */}
                            </Link>

                            <Link className="nav-link active" to="/" id="hover">
                                <FontAwesomeIcon className="mr-2 fa-2x" id='navIcons' icon={ faClone }/>
                            </Link>

                            <Link className="nav-link active" to="/" id="hover">
                                <FontAwesomeIcon className="mr-2 fa-2x" id='navIcons' icon={ faPlusSquare }/>
                            </Link>

                            <Link className="nav-link active" to="/" id="hover">
                                <FontAwesomeIcon className="mr-2 fa-2x" id='navIcons' icon={ faBell }/>
                            </Link>

                            

                            <Link className="nav-link active" id="hover">
                                {/* <li className="wrap"> */}
                                    <div className="search">
                                        <input type="text" className="searchTerm" placeholder="Search theCmd"/>
                                        <button type="submit" className="searchButton">
                                            <FontAwesomeIcon icon={faSearch}/>
                                        </button>
                                    </div>
                                {/* </li> */}
                            </Link>
                            

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    { userData ? (<img src={userData.imageUrl} id='navIcons' alt="" className='navImg'/>): (<FontAwesomeIcon style={{ height:'30px', width:'30px', borderRadius:'50%' }} className="userIcon mx-2" icon={faUserCircle}/>)}
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/ViewProfile" className="dropdown-item" style={localStorage.getItem('user') ? {display:'block'}:{display:'none'}}>
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faEye }/>View Profile
                                </Link>
                                <Link to="/WriteStory" className="dropdown-item" style={localStorage.getItem('user') ? {display:'block'}:{display:'none'}}>
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faPenAlt }/>Write A Story
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/SignIn"className="dropdown-item" style={localStorage.getItem('user') ? {display:'none'}:{display:'block'}}>
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faSignInAlt }/>Sign In
                                </Link>
                                <Link to="/"className="dropdown-item" onClick={signOut} style={localStorage.getItem('user') ? {display:'block'}:{display:'none'}}>
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faDoorOpen }/>Sign Out
                                </Link>
                                </div>
                            </li>
                            <Link className="navbar-brand mt-1" to="/" id="hover">
                                <p style={{ color:'white',textTransform:'capitalize' }}>Following</p>
                            </Link>
                            <Link className="navbar-brand mt-1" to="/" id="hover">
                                <p style={{ color:'white',textTransform:'capitalize' }}>For you</p>
                            </Link>
                        </ul>
                    </div>
                </div> 
            </nav>
        </>
        )
    }
export default Navbar
