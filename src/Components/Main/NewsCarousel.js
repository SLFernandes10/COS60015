import { Carousel } from "react-responsive-carousel";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function NewsCarousel() {

  function openNews1(event) {
    document.getElementById('asideImg').style.display='none';
    document.getElementById('whereNext').style.display='none';
    document.getElementById('favBoards').style.display='none';
    document.getElementById('trainingTips').style.display='none';
    document.getElementById('monthlyPup').style.display='none';
    document.getElementById('mayRecap').style.display='block';
    document.getElementById('upcomingEvents').style.display='none';  
    document.getElementById('updatesAndNews').style.display='none';    
    document.getElementById('meetOurChampions').style.display='none';    
    document.getElementById('historyOfDogSurfing').style.display='none';     
    
  }

  function openNews2(event) {
    document.getElementById('asideImg').style.display='none';
    document.getElementById('whereNext').style.display='block';
    document.getElementById('favBoards').style.display='none';
    document.getElementById('trainingTips').style.display='none';
    document.getElementById('monthlyPup').style.display='none';
    document.getElementById('mayRecap').style.display='none';
    document.getElementById('upcomingEvents').style.display='none';  
    document.getElementById('updatesAndNews').style.display='none';    
    document.getElementById('meetOurChampions').style.display='none';    
    document.getElementById('historyOfDogSurfing').style.display='none';   
  }

  function openNews3(event) {
    document.getElementById('asideImg').style.display='none';
    document.getElementById('whereNext').style.display='none';
    document.getElementById('favBoards').style.display='block';
    document.getElementById('trainingTips').style.display='none';
    document.getElementById('monthlyPup').style.display='none';
    document.getElementById('mayRecap').style.display='none';
    document.getElementById('upcomingEvents').style.display='none';  
    document.getElementById('updatesAndNews').style.display='none';    
    document.getElementById('meetOurChampions').style.display='none';    
    document.getElementById('historyOfDogSurfing').style.display='none';   
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