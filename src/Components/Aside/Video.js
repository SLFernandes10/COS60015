import React from "react";

function Video({youtubeID}){
    
return(
    <iframe className='video'
        title='Youtube player' 
        referrerPolicy='no-referrer-when-downgrade'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
    </iframe>
)
}

export default Video;