import React from 'react';
const AsideElementIds = ['asideImg', 'whereNext', 'favBoards', 'trainingTips', 'monthlyPup', 'mayRecap', 'upcomingEvents', 'updatesAndNews', 'meetOurChampions', 'historyOfDogSurfing']; 


function Training() {

    function openTrainingTips(event) {    
        AsideElementIds.forEach((element) => {
            document.getElementById(element).style.display='none';
          });   
          document.getElementById('trainingTips').style.display='block';
    }
    return (
        <div className="column_pics">
            <button className="button training" onClick={openTrainingTips}><img className="img training" src="/images/download (2).jpg"/></button>
            <div className="bg"></div>
            <h6>Training Tips</h6>
        </div>
    );
};

export default Training;