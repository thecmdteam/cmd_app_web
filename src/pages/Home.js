import React, { useState, useEffect } from 'react'
import BlogPosts from '../components/BlogPosts'
import defaultimg from '../assets/default.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment, faShare, faShareAlt } from '@fortawesome/free-solid-svg-icons';



class Home extends React.Component{
    render(){
        return (
            <div>
                <h2 style={{marginTop: '6rem'}}></h2>
                <div className="container">
                    <div className="row mb-5" style={{ maxWidth:"88%" }}>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default image" style={{ width:"28rem" }}/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <p><i style={{color:"#2c3e50"}}> Date:Wed 12 2021 Time:12:00:00</i></p>
                            <h1>This is the blog title...</h1>
                            <p>Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt propt</p>
                            <button id="homeReadMoreBtn">Read More</button>
                            <hr/>
                            <p id="homeActionsIcons">
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                </div>
                            </p>
                        </div>
                    </div>

<hr/>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default image" style={{ width:"18rem" }}/>

                            <p><i style={{color:"#2c3e50"}}> Date:Wed 12 2021 Time:12:00:00</i></p>
                            <h3>This is the blog title...</h3>
                            <p>Redundant alt attribute. Screen-readers already announce `img` tag (or any specified custom words) in the alt propt</p>
                            <button id="homeReadMoreBtn">Read More</button>
                            <hr/>
                            <p id="homeActionsIcons">
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                </div>
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default image" style={{ width:"18rem" }}/>

                            <p><i style={{color:"#2c3e50"}}> Date:Wed 12 2021 Time:12:00:00</i></p>
                            <h3>This is the blog title...</h3>
                            <p>Redundant alt attribute. Screen-readers already announce `img` tags as an image. (or any specified custom words) in the alt propt</p>
                            <button id="homeReadMoreBtn">Read More</button>
                            <hr/>
                            <p id="homeActionsIcons">
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                </div>
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default image" style={{ width:"18rem" }}/>

                            <p><i style={{color:"#2c3e50"}}> Date:Wed 12 2021 Time:12:00:00</i></p>
                            <h3>This is the blog title...</h3>
                            <p>Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words</p>
                            <button id="homeReadMoreBtn">Read More</button>
                            <hr/>
                            <p id="homeActionsIcons">
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                </div>
                                <div id="ficon">
                                <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                </div>
                            </p>
                        </div>


                        
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export default Home
