import React from "react";
import Video from "./Video";

function AsideContentVid({contentid, title, youtubeID, text1, text2} ) {
  
    return (
        <div id={contentid} className="asideContent">
            <h3>{title}</h3>
            <Video vidurl={youtubeID}/>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
        )
    }
    export default AsideContentVid;