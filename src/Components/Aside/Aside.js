import React from "react";
import AsideContent from "./AsideContent";
import AsideContentVid from "./AsideContentVid";
import WeatherWidget from "./WeatherWidget";
import Video from "./Video";
import AsideContentWeather from "./AsideContentWeather";

export default function Aside() {

  return (
    <div className="Aside">
      <img className="img aside" src="./images/dog-surfing-guide.jpg" id="asideImg" alt="jack russel terrier with red sunglasses sitting on yellow surfboard in the water"/>  
      <AsideContent contentid="favBoards" title="Our Favorite Boards" image="./images/surfboards2.jpg" imagealttext = "multiple different types of surfboards we like" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <AsideContent contentid="mayRecap" title="May Recap" image="./images/download.jpg" imagealttext = "dog surfing from May recap news" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <AsideContent contentid="monthlyPup" title="Pup of the Month" image="./images/dog-surfing-guide.jpg" imagealttext = "Our Monthly Pup" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <AsideContentVid contentid="trainingTips" title="Training Tips" video={<Video />} youtubeID="0eSIrfq3iWs" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <AsideContentWeather contentid="whereNext" title="Where to Next?" weather={<WeatherWidget />} text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      
      <AsideContent contentid="upcomingEvents" title="Upcoming Events" image="./images/calendarevents.jpg" imagealttext = "calendar of upcoming events" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <AsideContent contentid="updatesAndNews" title="Updates And News" image="./images/dognews.jpg" imagealttext = "Updates and news from us" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <AsideContent contentid="meetOurChampions" title="Meet Our Champions" image="./images/champions.jpg" imagealttext = "all of our surfing dogs" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
      <AsideContent contentid="historyOfDogSurfing" title="History of Dog Surfing" image="./images/history.jpg" imagealttext = "the history of the sport of dog surfing" text1="Dog surfing is a type of surfing maneuver involving dogs that are trained to surf on surfboards, bodyboards, skimboards, windsurf boards or to bodysurf. Historically, surfing dogs have been documented as occurring as early as the 1920s in the United States. Competitions and exhibitions that feature surfing dogs have occurred in various coastal areas of the United States, such as Del Mar, California, Imperial Beach, California and Jupiter, Florida"/>
          
    
    </div>
  );
}