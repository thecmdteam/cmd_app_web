import React from 'react'
import defaultimg from '../assets/default.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment, faShareAlt, faCalendarDay} from '@fortawesome/free-solid-svg-icons';



const Home = () =>{
        return (
            <div>
                <h2 style={{marginTop: '6rem'}}>Blog Posts</h2>
                <div className="container">
                    <div className="row mb-5" style={{ maxWidth:"88%" }}>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default Profile Pic" style={{ width:"28rem" }}/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                        <p>
                            <FontAwesomeIcon className="userIcon mx-2" icon={faCalendarDay}/>
                            <em>: Wed 12 2021 </em>{/* <FontAwesomeIcon className="userIcon mx-2" icon={faClock}/>: 12:00:00 */}
                        </p>
                            <h1>This is the blog title...</h1>
                            <p>Redundant alt attribute. Screen-readers already announce `img` tags as an Profile Pic.. You don't need to use the words `Profile Pic.`, `photo,` or `picture`</p>
                            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                                <button id="homeReadMoreBtn">Read More</button>
                                <p><em> Post by -- Ebube Boss</em></p>
                            </div>
                            
                            <hr/>
                            <p id="homeActionsIcons">
                                <div className="ficon">
                                    <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Like">
                                        <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                    </button>
                                </div>
                                <div className="ficon">
                                    <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Dislike">
                                        <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                    </button>
                                </div>
                                <div className="ficon">
                                    <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Comment">
                                        <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                    </button>
                                </div>
                                <div className="ficon">
                                    <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Share">
                                        <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                    </button>
                                </div>
                            </p>
                        </div>
                    </div>

                    <hr id='horLine'/>

                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default Profile Pic." style={{ width:"18rem", borderRadius:'7px 7px 0 0' }}/>
                            <div className="cardContent">
                                <p>
                                    <FontAwesomeIcon className="userIcon mx-2" icon={faCalendarDay}/>
                                    <em>: Wed 12 2021 </em>
                                        {/* <FontAwesomeIcon className="userIcon mx-2" icon={faClock}/>: 12:00:00 */}
                                </p>
                                
                                <h3>This is the blog title...</h3>
                                <p>Redundant alt attribute. Screen-readers already announce `img` tag (or any specified custom words) in the alt propt</p>
                                <p><em> Post by -- Ebube Boss</em></p>
                                <button id="cardReadMoreBtn">Read More</button>
                                
                                <hr id='cardHorLine'/>
                                <p id="cardActionsIcons">
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Like">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Dislike">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Comment">
                                            <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Share">
                                            <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default Profile Pic." style={{ width:"18rem", borderRadius:'7px 7px 0 0' }}/>
                            <div className="cardContent">
                                <p>
                                    <FontAwesomeIcon className="userIcon mx-2" icon={faCalendarDay}/>
                                    <em>: Wed 12 2021 </em>
                                        {/* <FontAwesomeIcon className="userIcon mx-2" icon={faClock}/>: 12:00:00 */}
                                </p>
                                
                                <h3>This is the blog title...</h3>
                                <p>Redundant alt attribute. Screen-readers already announce `img` tag (or any specified custom words) in the alt propt</p>
                                <p><em> Post by -- Ebube Boss</em></p>
                                <button id="cardReadMoreBtn">Read More</button>
                                
                                <hr id='cardHorLine'/>
                                <p id="cardActionsIcons">
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Like">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Dislike">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Comment">
                                            <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Share">
                                            <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default Profile Pic." style={{ width:"18rem", borderRadius:'7px 7px 0 0' }}/>
                            <div className="cardContent">
                                <p>
                                    <FontAwesomeIcon className="userIcon mx-2" icon={faCalendarDay}/>
                                    <em>: Wed 12 2021 </em>
                                        {/* <FontAwesomeIcon className="userIcon mx-2" icon={faClock}/>: 12:00:00 */}
                                </p>
                                
                                <h3>This is the blog title...</h3>
                                <p>Redundant alt attribute. Screen-readers already announce `img` tag (or any specified custom words) in the alt propt</p>
                                <p><em> Post by -- Ebube Boss</em></p>
                                <button id="cardReadMoreBtn">Read More</button>
                                
                                <hr id='cardHorLine'/>
                                <p id="cardActionsIcons">
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Like">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Dislike">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Comment">
                                            <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Share">
                                            <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>


                        
                    </div>


                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default Profile Pic." style={{ width:"18rem", borderRadius:'7px 7px 0 0' }}/>
                            <div className="cardContent">
                                <p>
                                    <FontAwesomeIcon className="userIcon mx-2" icon={faCalendarDay}/>
                                    <em>: Wed 12 2021 </em>
                                        {/* <FontAwesomeIcon className="userIcon mx-2" icon={faClock}/>: 12:00:00 */}
                                </p>
                                
                                <h3>This is the blog title...</h3>
                                <p>Redundant alt attribute. Screen-readers already announce `img` tag (or any specified custom words) in the alt propt</p>
                                <p><em> Post by -- Ebube Boss</em></p>
                                <button id="cardReadMoreBtn">Read More</button>
                                
                                <hr id='cardHorLine'/>
                                <p id="cardActionsIcons">
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Like">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Dislike">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Comment">
                                            <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Share">
                                            <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default Profile Pic." style={{ width:"18rem", borderRadius:'7px 7px 0 0' }}/>
                            <div className="cardContent">
                                <p>
                                    <FontAwesomeIcon className="userIcon mx-2" icon={faCalendarDay}/>
                                    <em>: Wed 12 2021 </em>
                                        {/* <FontAwesomeIcon className="userIcon mx-2" icon={faClock}/>: 12:00:00 */}
                                </p>
                                
                                <h3>This is the blog title...</h3>
                                <p>Redundant alt attribute. Screen-readers already announce `img` tag (or any specified custom words) in the alt propt</p>
                                <p><em> Post by -- Ebube Boss</em></p>
                                <button id="cardReadMoreBtn">Read More</button>
                                
                                <hr id='cardHorLine'/>
                                <p id="cardActionsIcons">
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Like">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Dislike">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Comment">
                                            <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Share">
                                            <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src={ defaultimg } alt="Blog Default Profile Pic." style={{ width:"18rem", borderRadius:'7px 7px 0 0' }}/>
                            <div className="cardContent">
                                <p>
                                    <FontAwesomeIcon className="userIcon mx-2" icon={faCalendarDay}/>
                                    <em>: Wed 12 2021 </em>
                                        {/* <FontAwesomeIcon className="userIcon mx-2" icon={faClock}/>: 12:00:00 */}
                                </p>
                                
                                <h3>This is the blog title...</h3>
                                <p>Redundant alt attribute. Screen-readers already announce `img` tag (or any specified custom words) in the alt propt</p>
                                <p><em> Post by -- Ebube Boss</em></p>
                                <button id="cardReadMoreBtn">Read More</button>
                                
                                <hr id='cardHorLine'/>
                                <p id="cardActionsIcons">
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Like">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsUp}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Dislike">
                                            <FontAwesomeIcon className="userIcon" icon={faThumbsDown}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Comment">
                                            <FontAwesomeIcon className="userIcon" icon={faComment}/>
                                        </button>
                                    </div>
                                    <div id="ficon">
                                        <button className='toolTip' type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Share">
                                            <FontAwesomeIcon className="userIcon" icon={faShareAlt}/>
                                        </button>
                                    </div>
                                </p>
                            </div>
                        </div>


                        
                    </div>
                    
                </div>
            </div>
        )
}

export default Home
