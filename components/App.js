import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/Home">
                <Home />
                </Route>
                <Route exact path="/Post">
                <Post />
                </Route>
                <Route exact path="/PostList">
                <PostList />
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