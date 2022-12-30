import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3004/${id}`)
        .then((r) => r.json())
        .then(data => setPost(data.site))
    }, [id])

    if (!site) return <h2>Loading...</h2>

    return (
        <section>
            <div>
            <h3>Title: {title}</h3>
            <h3>User: {user} </h3>
            <img src={image} />
            <strong>Location = {location}</strong>
            <p>Comments: {comment} </p>
            </div>
        </section>
    )
}

export default PostDetail;