import React from 'react';
import newcmd from '../assets/newcmd.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faSignInAlt, faEye } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {

    state = {
        home: 'Home',
        about: 'About Us',
        signIn: 'Sign In',
        menu: 'Menu'
    }

    render() {
        const {home, about, signIn, menu} = this.state
        return (
            <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <img src={newcmd} alt="TheCmdLogo"  style={{ width: '10rem'}}/>
                    <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div id="menuBar">
                            <FontAwesomeIcon icon={faBars}/>
                            <h5 id="navBarToggler">{menu}</h5>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <Link className="nav-link active" to="/" id="hover">{home}</Link>
                            <Link className="nav-link" to="/About">{about}</Link>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" 
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon className="userIcon" icon={faUserCircle}/>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="#" className="dropdown-item">
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faEye }/>View Profile
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/SignIn"className="dropdown-item">
                                    <FontAwesomeIcon className="mr-2 fa-1x" icon={ faSignInAlt }/>{signIn}
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
}
export default Navbar
