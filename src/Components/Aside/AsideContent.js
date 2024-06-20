import React from "react";

function AsideContent({contentid, title, weather, video, image, imagealttext, text1, text2} ) {
  
    return (
        <div id={contentid} className="asideContent">
            <h3>{title}</h3>
            {weather}
            <img className="news" src={image} id="asideImg" alt={imagealttext}/>
            {video}
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
        )
    }
    export default AsideContent;
    
