import React from "react";
import styled from "styled-components";

function Home() {
    return (
        <HomeStyle>
            <div>
            <img src="https://i.imgur.com/kyblMxa.jpg"></img>
            <h3 className="text">Southwest Fieldnotes</h3>
            </div>

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
.text{
    position:absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 2px 2px 5px black;
    font-size: 90px;
    font-family: 'Times New Roman', serif;
    font-style: oblique;
}
`