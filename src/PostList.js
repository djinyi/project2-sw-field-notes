import React, { useEffect, useState } from "react";
import Post from "./Post";

function PostList({ prop }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/sites")
        .then((r) => r.json())
        .then(data => setPosts(data))
    }, [])

    const post = posts.map((post) => (
        <Post
        key={post.id}
        id={post.id}
        title={post.name}
        user={post.user}
        image={post.image}
        location={post.location}
        comment={post.comment}
        />
    ))

    return(
        <div className="body">
            <h2>Posts</h2>
            <div>{post}</div>
        </div>
    )
}

export default PostList;