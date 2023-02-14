import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import PostList from "./PostList"
import NewPost from "./NewPost"



function App() {
    const [posts, setPosts] = useState([]);
        
    useEffect(() => {
        fetch("http://localhost:3004/sites")
        .then((r) => r.json())
        .then(data => setPosts(data))
    }, [])
    
    function handleDeletePost(post) {
        const updatedPosts = posts.filter((poster) => poster.id !== post.id);
        setPosts(updatedPosts)
    }
    
    function addNewPost(newPost) {
        setPosts([...posts, newPost])
    }
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                <Home />
                </Route>
                <Route exact path="/post">
                <Post />
                </Route>
                <Route exact path="/PostList">
                <PostList posts={posts} handleDeletePost={handleDeletePost}/>
                </Route>
                <Route exact path="/submitpost">
                <NewPost addNewPost={addNewPost}/>
                </Route>
                <Route exact path="/About">
                <About />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default App;