import React from "react";
import WeatherWidget from "./WeatherWidget"
import PupOfTheMonthMay from "./PupOfTheMonthMay"
import MayRecap from "./MayRecap";

function AsideContent() {

    return (
        <div className="Aside">
        <img className="img aside" src="/images/dog-surfing-guide.jpg" id="asideImg" alt="jack russel terrier with red sunglasses sitting on yellow surfboard in the water"/>
        <PupOfTheMonthMay />
        <MayRecap />
        <div id="whereNext" className="asideContent">
          <h3>Where to Next?</h3>
          <WeatherWidget />
          <p>Our Next Competition Destination: Sydney!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div id="favBoards" className="asideContent">
        <img className="news" src="/images/surfboards2.jpg" id="asideImg" alt="multiple different types of surfboards we like"/>
          <h3>Our Favorite Boards</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       
        <div id="trainingTips" className="asideContent">
          <video controls>
            <source src="https://www.youtube.com/watch?v=0eSIrfq3iWs"/>
          </video>
          <h3>Training Tips</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    )
}

export default AsideContent;