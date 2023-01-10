import React, { useState } from "react";
import Thumbs from "./Thumbs";
import styled from "styled-components";
import { GoComment } from "react-icons/go";
import { SlTrash } from "react-icons/sl";

function Post({ id, title, user, image, location, comment, upvotes, downvotes, onDeletePost, post }) {
    const [showComment, setShowComment] = useState(false);
    const [up, setUp] = useState(upvotes);
    const [down, setDown] = useState(downvotes)

    function handleClick() {
        return setShowComment((showComment) => !showComment)
    };

    function handleUp(up) {

        setUp(up)
           
           fetch(`http://localhost:3004/sites/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                upvotes: up,
            }),
        })
        .then((r) => r.json())
        .then((updated) => console.log(updated))
    }

    function handleDown(down) {

        setDown(down)
 
        fetch(`http://localhost:3004/sites/${id}`, {
         method: "PATCH",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify({
             "downvotes": down,
         }),
     })
     .then((r) => r.json())
     .then((updated) => console.log(updated))
 }

 function handleDeleteClick() {
    fetch(`http://localhost:3004/sites/${id}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeletePost(post))
 }

    return (
        <PostDetail>

            <div> 
            <h3>Title: {title}</h3>
            <h3>User: {user} </h3>
            <img src={image} alt={title}/>
            <strong>Location: {location}</strong>
            <Thumbs up={up} down={down} handleUp={handleUp} handleDown={handleDown}/>
            <button onClick={handleClick}> {showComment? "Show less" : "Show User Comment"} <GoComment /> </button>
            <p>{showComment? [comment]: null}</p>
            <button onClick={handleDeleteClick}> Delete Post <SlTrash /></button>
            </div>
        </PostDetail>
    )
}

export default Post;

const PostDetail = styled.div`
display-direction:flex;
flex-direction:column;
color:red;
margin: 5px;
font-family: Arial, sans-serif;
h3{
    font-size:44px;
    border-bottom:solid;
    border-color:#42ddf5
}
.wrapper{
    display:flex;
    div{
        margin:10px;
    }
}
img{
    width:600px;
}
button{
    background-color: #42ddf5
    color: white;
    height: 40px;
    font-size: 30px
    margin-top: 8px;
}
`