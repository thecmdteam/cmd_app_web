import React from 'react'
import {useState} from 'react'
import BlogPosts from '../components/BlogPosts'
import newcmd from '../assets/newcmd.png'

const Home = () => {
    const [blogs] = useState([
        {title: 'First Title', body:'First Post Description goes here', id:'1', image:{newcmd}},
        {title: 'Second Title', body:'Second Post Description goes here', id:'2', image:{newcmd}},
        {title: 'Third title', body:'Third Post Description goes here', id:'3', image:{newcmd}},
        {title: 'Forth title', body:'Forth Post Description goes here', id:'4', image:{newcmd}},
        {title: 'Forth title', body:'Forth Post Description goes here', id:'6', image:{newcmd}},
        {title: 'Forth title', body:'Forth Post Description goes here', id:'5', image:{newcmd}}

    ])
    return (
        <div>
            <h2 style={{marginTop: '6rem'}}>Home Page</h2>
            
            {/* i passed in the blogs in here as a props */}
               <BlogPosts blogs={blogs}/>
        </div>
    )
}

export default Home
