import React from "react";

function Video({vidurl}){
    
return(
    <video id="myVideo" controls>
        <source src={vidurl}/>
    </video>
)
}

export default Video;