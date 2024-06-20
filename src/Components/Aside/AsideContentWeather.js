import React from "react";

function AsideContentTest({contentid, title, weather, text1} ) {
  
    return (
        <div id={contentid} className="asideContent">
            <h3>{title}</h3>
            {weather}
            <p>{text1}</p>
        </div>
        )
    }
    export default AsideContentTest;