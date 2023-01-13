import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PostList() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3004/sites")
        .then((r) => r.json())
        .then(data => setPosts(data))
    }, [])
    
    function handleDeletePost(post) {
        const updatedPosts = posts.filter((poster) => poster.id !== post.id);
        setPosts(updatedPosts)
        console.log("HI")
    }

    const post = posts.map((post) => (
        <Post
        key={post.id}
        id={post.id}
        title={post.name}
        user={post.user}
        image={post.image}
        location={post.location}
        comment={post.comments}
        upvotes={post.upvotes}
        downvotes={post.downvotes}
        onDeletePost={handleDeletePost}
        post={post}
        />
    ))

    return(
        <PostStyle className="body">
            <h2>Posts</h2>
            <div>{post}</div>
            <Link to={`/submitpost`}>Submit New Post</Link>

        </PostStyle>
    )
}

export default PostList;

const PostStyle = styled.div`
h2{
    font-size: 40px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
`

