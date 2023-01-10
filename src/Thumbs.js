import React from "react";
import { GoThumbsup, GoThumbsdown } from "react-icons/go";
 
function Thumbs( {down, up, handleDown, handleUp} ) {

 
   return(
       <div>
           <button onClick={() => handleUp(up+1)}>{up}  <GoThumbsup /></button>
           <button onClick={() => handleDown(down+1)}>{down} <GoThumbsdown /></button>
       </div>
   )
}
 
export default Thumbs;