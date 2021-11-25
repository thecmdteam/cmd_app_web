import React, { useState, useEffect } from 'react'
import BlogPosts from '../components/BlogPosts'
import newcmd from '../assets/newcmd.png'



class Home extends React.Component{
    // const [blogs] = useState([
    //     {title: 'First Title', body:'First Post Description goes here', id:'1', image:{newcmd}},
    //     {title: 'Second Title', body:'Second Post Description goes here', id:'2', image:{newcmd}},
    //     {title: 'Third title', body:'Third Post Description goes here', id:'3', image:{newcmd}},
    //     {title: 'Forth title', body:'Forth Post Description goes here', id:'4', image:{newcmd}},
    //     {title: 'Forth title', body:'Forth Post Description goes here', id:'6', image:{newcmd}},
    //     {title: 'Forth title', body:'Forth Post Description goes here', id:'5', image:{newcmd}}

    // ])

    // useEffect(() => {
        // let userData = {
        //     email: "",
        //     fname: "",
        //     id: "",
        //     imageUrl: "",
        //     isEmailVerified: false,
        //     lname: "",
        //     phone: "",
        //     techTrack: "",
        // }
        // localStorage.setItem("user", JSON.stringify(userData))
        // console.log(localStorage.getItem('user'))
        // console.log(userData.email)
        
    // }, [])
    // 
    componentWillMount(){
        // window.location.reload(false)
    }
    // window.location.reload()
    render(){
        return (
            <div>
                <h2 style={{marginTop: '6rem'}}>Home Page</h2>
                
                {/* i passed in the blogs in here as a props */}
                   {/* <BlogPosts blogs={blogs}/> */}
                   {/* <h2>You are not loged in</h2> */}
            </div>
        )
    }
    
}

export default Home
