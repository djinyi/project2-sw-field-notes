import React from "react";
import About from "./About";
import PostList from "./PostList";
import styled from "styled-components";

function Home() {
    return (
        <HomeStyle>
            <img src="https://i.imgur.com/xSWDe7t.jpg"></img>

        </HomeStyle>
    )
}

export default Home;

const HomeStyle = styled.div`
img{
    max-width: 100%;
    height: auto;
    opacity: .75;
}
`