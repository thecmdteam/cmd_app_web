import React from 'react'
import codeImg from '../assets/codeImg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faEllipsisV, faShareAlt, faHeart, faCommentAlt, faBookmark} from '@fortawesome/free-solid-svg-icons';
import ViewProfile from '../components/ViewProfile';
import { Link } from 'react-router-dom';





const Home = (props) =>{

    <ViewProfile locaclStorageData={localStorage.getItem('user')}/>;

    let userData = props.locaclStorageData;
    userData = JSON.parse(localStorage.getItem("user"))
    if(userData){
        console.log("User in")
    }else{
        console.log("No user in")

    }

    // if(userData){
    //     const { fname, lname, email, gitHubLink, linkedInLink, techTrack, phone, imageUrl, id } = userData;
    // }else{
    //     userData=""
    // }

    

        return (
            <div>
                <h2 style={{marginTop: '6rem'}}></h2>
                <div className="container">

                <div class="alert alert-white alert-dismissible fade show" style={{ boxShadow:'2px 2px 5px gray' }} role="alert">
                    { userData ? (<img alt='' src={ userData.imageUrl } style={{ height:'50px', width:'50px', borderRadius:'50%' }}/>): (<FontAwesomeIcon style={{ height:'50px', width:'50px', borderRadius:'50%' }} className="userIcon mx-2" icon={faUserCircle}/>) }
                    { userData ? (<span style={{ marginLeft:'1rem', fontSize:'20px', fontWeight:'bold'}}>{ userData.fname } { userData.lname }</span>): <span style={{ marginLeft:'1rem', fontSize:'20px', fontWeight:'bold'}}>Don't have an account?</span>}
                    { userData ? (<h3 className='mt-2' style={{fontWeight:'bold'}}>What do you want to ask or share?</h3>) : (<h4 className='mt-2' style={{fontWeight:'bold'}}><Link to="/Form" id="formLinks">Sign Up</Link> for an account today or <Link to="/SignIn" id="formLinks">Sign In</Link></h4>)}
                    
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>


                        <div className="col-12 mt-5 pb-3" style={{ boxShadow:'2px 2px 4px #808080', paddingTop:'2rem', borderRadius:'5px' }}>
                            <div className="cardHeader" style={{display:'flex', justifyContent:'space-between'}}>
                                <div className="userInfo" style={{display:"flex"}}>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'35px', width:'35px', borderRadius:'50%' }} icon={faUserCircle}/>
                                    <div>
                                        <div style={{ display:'flex', fontWeight:'bold' }}>
                                            <h5 className='px-3 pt-2'>Ebube Boss</h5>
                                            <Link className="navbar-brand pt-1" to="/">
                                                <span style={{ color:'#f8c247', textTransform:'capitalize' }}>.Follow</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <span className=' pl-3'>2 Hours Ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="userOptions" >
                                    <FontAwesomeIcon icon={faEllipsisV} style={{ height:'20px', width:'20px'}} className='mt-2 mr-5'/>
                                </div>
                            </div>

                            <div className="cardContent ml-5">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente obcaecati fugit perspiciatis! Exercitationem 
                                voluptatem officiis eius accusamus, quas temporibus iure tempore ad... <span style={{color:'grey'}}>Read More</span> </p>
                            </div>

                            <div style={{backgroundColor: '#091325', width:'100%'}}>
                                <div className="cardImage" >
                                    <img src={codeImg} alt="" style={{marginLeft:'auto', marginRight:'auto', display:'block'}}/>
                                </div>
                            </div>

                            <div className="cardFooter mt-3" style={{display:'flex', justifyContent:'space-between'}}>
                                <div className="userActions" style={{display:"flex"}}>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faHeart}/> <span className='pl-2'>500</span><br/>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faCommentAlt}/> <span className='pl-2'>50</span>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faShareAlt}/>
                                </div>
                                <div className="userOptions">
                                    <FontAwesomeIcon icon={faBookmark} style={{ height:'20px', width:'20px'}} className='mr-5'/>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 mt-5 pb-3" style={{ boxShadow:'2px 2px 4px #808080', paddingTop:'2rem', borderRadius:'5px' }}>
                            <div className="cardHeader" style={{display:'flex', justifyContent:'space-between'}}>
                                <div className="userInfo" style={{display:"flex"}}>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'35px', width:'35px', borderRadius:'50%' }} icon={faUserCircle}/>
                                    <div>
                                        <div style={{ display:'flex', fontWeight:'bold' }}>
                                            <h5 className='px-3 pt-2'>Ebube Boss</h5>
                                            <Link className="navbar-brand pt-1" to="/">
                                                <span style={{ color:'#f8c247', textTransform:'capitalize' }}>.Follow</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <span className=' pl-3'>2 Hours Ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="userOptions" >
                                    <FontAwesomeIcon icon={faEllipsisV} style={{ height:'20px', width:'20px'}} className='mt-2 mr-5'/>
                                </div>
                            </div>

                            <div className="cardContent ml-5">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente obcaecati fugit perspiciatis! Exercitationem 
                                voluptatem officiis eius accusamus, quas temporibus iure tempore ad corporis perspiciatis nisi minus autem blanditiis omnis earum.</p>
                            </div>

                            <div style={{backgroundColor: '#091325', width:'100%'}}>
                                <div className="cardImage" >
                                    <img src={codeImg} alt="" style={{marginLeft:'auto', marginRight:'auto', display:'block'}}/>
                                </div>
                            </div>

                            <div className="cardFooter mt-3" style={{display:'flex', justifyContent:'space-between'}}>
                                <div className="userActions" style={{display:"flex"}}>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faHeart}/> <span className='pl-2'>500</span>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faCommentAlt}/> <span className='pl-2'>50</span>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faShareAlt}/>
                                </div>
                                <div className="userOptions">
                                    <FontAwesomeIcon icon={faBookmark} style={{ height:'20px', width:'20px'}} className='mr-5'/>
                                </div>
                            </div>

                        </div>

                        <div className="col-12 mt-5 pb-3" style={{ boxShadow:'2px 2px 4px #808080', paddingTop:'2rem', borderRadius:'5px' }}>
                            <div className="cardHeader" style={{display:'flex', justifyContent:'space-between'}}>
                                <div className="userInfo" style={{display:"flex"}}>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'35px', width:'35px', borderRadius:'50%' }} icon={faUserCircle}/>
                                    <div>
                                        <div style={{ display:'flex', fontWeight:'bold' }}>
                                            <h5 className='px-3 pt-2'>Ebube Boss</h5>
                                            <Link className="navbar-brand pt-1" to="/">
                                                <span style={{ color:'#f8c247', textTransform:'capitalize' }}>.Follow</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <span className=' pl-3'>2 Hours Ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="userOptions" >
                                    <FontAwesomeIcon icon={faEllipsisV} style={{ height:'20px', width:'20px'}} className='mt-2 mr-5'/>
                                </div>
                            </div>

                            <div className="cardContent ml-5">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente obcaecati fugit perspiciatis! Exercitationem 
                                voluptatem officiis eius accusamus, quas temporibus iure tempore ad corporis perspiciatis nisi minus autem blanditiis omnis earum.</p>
                            </div>

                            <div style={{backgroundColor: '#091325', width:'100%'}}>
                                <div className="cardImage" >
                                    <img src={codeImg} alt="" style={{marginLeft:'auto', marginRight:'auto', display:'block'}}/>
                                </div>
                            </div>

                            <div className="cardFooter mt-3" style={{display:'flex', justifyContent:'space-between'}}>
                                <div className="userActions" style={{display:"flex"}}>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faHeart}/> <span className='pl-2'>500</span>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faCommentAlt}/> <span className='pl-2'>50</span>
                                    <FontAwesomeIcon className='ml-5' style={{ height:'20px', width:'20px' }} icon={faShareAlt}/>
                                </div>
                                <div className="userOptions">
                                    <FontAwesomeIcon icon={faBookmark} style={{ height:'20px', width:'20px'}} className='mr-5'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
}

export default Home
