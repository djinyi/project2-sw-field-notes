import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Post from "./Post";
import PostList from "./PostList"
import NewPost from "./NewPost"



function App() {
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
                <Route exact path="/postList">
                <PostList />
                </Route>
                <Route exact path="/submitpost">
                <NewPost />
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