import React, { useEffect } from 'react';
import newcmd from '../assets/newcmd.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faSignInAlt, faDoorOpen, faEye } from '@fortawesome/free-solid-svg-icons';
// import { useHistory } from 'react-router-dom'

const Navbar = () => {

    const signOut = () =>{
        localStorage.clear();
    }

        return (
            <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <img src={newcmd} alt="TheCmdLogo"  style={{ width: '10rem'}}/>
                    <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div id="menuBar">
                            <FontAwesomeIcon icon={faBars}/>
                            <h5 id="navBarToggler">Menu</h5>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <Link className="nav-link active" to="/" id="hover">Home</Link>
                            <Link className="nav-link" to="/About">About</Link>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon className="userIcon" icon={faUserCircle}/>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/ViewProfile" className="dropdown-item" style={localStorage.getItem('user') ? {display:'block'}:{display:'none'}}>
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faEye }/>View Profile
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/SignIn"className="dropdown-item" style={localStorage.getItem('user') ? {display:'none'}:{display:'block'}}>
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faSignInAlt }/>Sign In
                                </Link>
                                <Link to="/"className="dropdown-item" onClick={signOut} style={localStorage.getItem('user') ? {display:'block'}:{display:'none'}}>
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faDoorOpen }/>Sign Out
                                </Link>
                                {/* <a className="dropdown-item" href="#">Something else here</a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> 
            </nav>
        </>
        )
    }
export default Navbar
