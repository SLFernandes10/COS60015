import React from 'react';

const AsideElementIds = ['asideImg', 'whereNext', 'favBoards', 'trainingTips', 'monthlyPup', 'mayRecap', 'upcomingEvents', 'updatesAndNews', 'meetOurChampions', 'historyOfDogSurfing']; 

function PupOfMonth () {

    function openPupofMonthText(event) {
        AsideElementIds.forEach((element) => {
            document.getElementById(element).style.display='none';
          });   
          document.getElementById('monthlyPup').style.display='block';
    }

    return (
        <div className="column_pics">
            <button className="button pup" onClick={openPupofMonthText}><img className="img pup" src="/images/download (1).jpg"/></button>
            <div className="bg"></div>
            <h6>Pup of the Month</h6>
        </div>
    );
};

export default PupOfMonth;