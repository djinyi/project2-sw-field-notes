import React from "react";
import { Link } from "react-router-dom";

function Post({ id, title, user, image, location, comment }) {
    
    return (
        <div> 
            <h3>Title = {title}</h3>
            <h3>User = {user} </h3>
            <a src={image}></a>
            <strong>Location = {location}</strong>
            <p>Comments: {comment} </p>
            <Link to={`/posts/${id}`}>See more</Link>
        </div>
    )
}

export default Post;