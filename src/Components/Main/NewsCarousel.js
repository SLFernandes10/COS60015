import { Carousel } from "react-responsive-carousel";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AsideElementIds = ['asideImg', 'whereNext', 'favBoards', 'trainingTips', 'monthlyPup', 'mayRecap', 'upcomingEvents', 'updatesAndNews', 'meetOurChampions', 'historyOfDogSurfing']; 


function NewsCarousel() {

  function openNews1(event) {
    AsideElementIds.forEach((element) => {
      document.getElementById(element).style.display='none';
    });   
    document.getElementById('mayRecap').style.display='block';
  }

  function openNews2(event) {
    AsideElementIds.forEach((element) => {
      document.getElementById(element).style.display='none';
    });   
    document.getElementById('whereNext').style.display='block'; 
  }

  function openNews3(event) {
    AsideElementIds.forEach((element) => {
      document.getElementById(element).style.display='none';
    });   
    document.getElementById('favBoards').style.display='block';  
  }

    return (
      <div className="column_pics">
          <Carousel useKeyboardArrows={true} showThumbs={false} showIndicators={false}>
          <div className="column_pics">
            <button onClick={openNews1}><img src="/images/download.jpg"/></button>
              <div className="bg"></div>
              <h6>May Recap</h6>
            </div>
            <div className="column_pics">
              <button onClick={openNews2}><img src="/images/Beach_at_Fort_Lauderdale.jpg"/></button>
              <div className="bg"></div>
              <h6>Where to Next?</h6>
            </div>
            <div className="column_pics">
              <button onClick={openNews3}><img src="/images/surfboards.jpg"/></button>
              <div className="bg"></div>
              <h6>Our Favorite Boards</h6>
            </div>
          </Carousel>
          </div>
      );
    }

export default NewsCarousel;