import React from 'react'


const BlogPosts = ({ blogs }) => {
    return(
        <>
        <div className="container">
                    <div className="row">
                        <div style={userStyle}>
                        {blogs.map( blog => (
                    <div className="blogPosts" key={blog.id}>
                        <div className="card" style={{border:"none"}}>
                        <img src={blog.image} alt="post_Image" id="card_image" className="img-fluid"/>
                            <div className="body">
                                <h4 className="mt-3">Blog title: {blog.title}</h4>
                                <p className="mt-3 mb-3">Blog body: {blog.body}</p>
                                <div id="cardButtom">
                                    <h6>Votes</h6>
                                    <h6>comments</h6>
                                    <a href="https//">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                        </div>
                    </div>
                </div>
        </>
    )
}

const userStyle = {
    display:'grid',
    alignContent: 'center',
    gridTemplateColumns:'auto auto auto',
    gridGap: '2rem',
};

export default BlogPosts