import React from "react";
import Post from "./Post";
import styled from "styled-components";


function PostList({posts, handleDeletePost}) {


    return(
        <PostStyle className="body">
            <h2>Posts</h2>
            <div>{posts.map((post) => (
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
        />))}</div>
           

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

