import React from "react";
import { Link } from "react-router-dom";

function Post({ id, title, user, image, location, comment }) {

    console.log(image)
    
    return (
        <div> 
            <h3>Title = {title}</h3>
            <h3>User = {user} </h3>
            <img src={image} />
            <strong>Location = {location}</strong>
            <Link to={`/posts/${id}`}>See more</Link>
            
        </div>
    )
}

export default Post;