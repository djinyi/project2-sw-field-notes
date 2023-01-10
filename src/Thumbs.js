import React from "react";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import styled from "styled-components";
 
function Thumbs( {down, up, handleDown, handleUp} ) {

 
   return(
       <ThumbStyle>
           <button className="left" onClick={() => handleUp(up+1)}> {up}  <GoThumbsup /></button>
           <button onClick={() => handleDown(down+1)}> {down} <GoThumbsdown /></button>
       </ThumbStyle>
   )
}
 
export default Thumbs;

const ThumbStyle = styled.div`
button{
    background-color: #42ddf5
    color: white;
    height: 35px;
    width: 50px;
    font-size: 30px
    margin: 100px;
}
.left(
    margin-right: 10px;
)
`
