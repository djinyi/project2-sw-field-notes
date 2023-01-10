import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function NewPost() {
    const [name, setName] = useState("");
    const [user, setUser] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("")
    const upvotes = 0
    const downvotes =0


    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
             name, user, image, location, date, comment, upvotes, downvotes 
        }
        fetch("http://localhost:3004/sites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then(data => {
            history.push(`/PostDetail`)
        })
    }


    return (
        <FormStyle>
        <h3> Submit a new post! </h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
            type="text"
            id="title"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <label>User</label>
            <input
            type="text"
            id="user"
            value={user}
            onChange={e => setUser(e.target.value)}
            />
            <label>Image Url</label>
            <input
            type="text"
            id="image"
            value={image}
            onChange={e => setImage(e.target.value)}
            />
            <label>State</label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
            <label>Date</label>
            <input
            type="text"
            id="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            placeholder="--/--/--"
            />
            <label>Comment</label>
            <input
            type="text"
            id="date"
            value={comment}
            onChange={e => setComment(e.target.value)}
            />
            <button type="submit"> Submit </button>
            </form>
            </FormStyle>
    )

}

export default NewPost;

const FormStyle= styled.div`
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
button{
    background-color: #87CEEB;
    border: none;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
`