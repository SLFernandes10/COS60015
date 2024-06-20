import React from "react";


function opennavEvents(event){
    document.getElementById('asideImg').style.display='none';
    document.getElementById('whereNext').style.display='none';
    document.getElementById('favBoards').style.display='none';
    document.getElementById('trainingTips').style.display='none';
    document.getElementById('monthlyPup').style.display='none';
    document.getElementById('mayRecap').style.display='none';  
    document.getElementById('upcomingEvents').style.display='block';  
    document.getElementById('updatesAndNews').style.display='none';    
    document.getElementById('meetOurChampions').style.display='none';    
    document.getElementById('historyOfDogSurfing').style.display='none';    

}
function opennavUpdates(event){
  document.getElementById('asideImg').style.display='none';
    document.getElementById('whereNext').style.display='none';
    document.getElementById('favBoards').style.display='none';
    document.getElementById('trainingTips').style.display='none';
    document.getElementById('monthlyPup').style.display='none';
    document.getElementById('mayRecap').style.display='none';
    document.getElementById('upcomingEvents').style.display='none';  
    document.getElementById('updatesAndNews').style.display='block';    
    document.getElementById('meetOurChampions').style.display='none';    
    document.getElementById('historyOfDogSurfing').style.display='none';    
}
function opennavMeet(event){
  document.getElementById('asideImg').style.display='none';
    document.getElementById('whereNext').style.display='none';
    document.getElementById('favBoards').style.display='none';
    document.getElementById('trainingTips').style.display='none';
    document.getElementById('monthlyPup').style.display='none';
    document.getElementById('mayRecap').style.display='none';
    document.getElementById('upcomingEvents').style.display='none';  
    document.getElementById('updatesAndNews').style.display='none';    
    document.getElementById('meetOurChampions').style.display='block';    
    document.getElementById('historyOfDogSurfing').style.display='none';   
}
function opennavHistory(event){
  document.getElementById('asideImg').style.display='none';
    document.getElementById('whereNext').style.display='none';
    document.getElementById('favBoards').style.display='none';
    document.getElementById('trainingTips').style.display='none';
    document.getElementById('monthlyPup').style.display='none';
    document.getElementById('mayRecap').style.display='none';  
    document.getElementById('upcomingEvents').style.display='none';  
    document.getElementById('updatesAndNews').style.display='none';    
    document.getElementById('meetOurChampions').style.display='none';    
    document.getElementById('historyOfDogSurfing').style.display='block';   
}

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
      <form className="searchflex">
        <input type="text" placeholder="Search" />
        <button type="submit" className="searchbtn"><img src="/images/mag.png" height="20px" /></button>
      </form>
      <ul>
      <li><button className="button navigation" onClick={opennavEvents}>Upcoming Events</button></li>
      <li><button className="button navigation" onClick={opennavUpdates}>Updates and News</button></li>
      <li><button className="button navigation" onClick={opennavMeet}>Meet Our Champions</button></li>
      <li><button className="button navigation" onClick={opennavHistory}>History of Dog Surfing</button></li>
      </ul>
    </div>
    <div className="sponsers">
      <p>Thanks to our sponsors!</p>
      <img src="/images/petbarn.jpg" height="40px" /><br />
      <img src="/images/chewylogo.png" height="40px" /> <br />
      <img src="/images/purina-logo-square-2023.png" height="35px" /> 
    </div>
    </div>
    );
  };

export default Navigation;