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

            <div className="post"> 
            <h3>Title: {title}</h3>
            <h3>User: {user} </h3>
            <img src={image} alt={title}/>
            <p>Location: {location}</p>
            <Thumbs up={up} down={down} handleUp={handleUp} handleDown={handleDown}/>
            <button className="user" onClick={handleClick}> {showComment? "Show less" : "Show User Comment"} <GoComment /> </button>
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
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
h3{
    font-size:30px;
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
    margin: 10px;

}
button{
    background-color: #42ddf5
    color: white;
    height: 30px;
    font-size: 30px
    margin-top: 15px;
}
.post{
    padding-bottom: 20px;
    border-bottom-style: solid;
    border-bottom-color: rgba(135, 206, 235, .2)
}
.user{
    margin-top: 10px;
}
`