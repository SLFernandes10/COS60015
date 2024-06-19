import React from 'react';

function PupOfMonth () {

    function openPupofMonthText(event) {
        document.getElementById('asideImg').style.display='none';
        document.getElementById('whereNext').style.display='none';
        document.getElementById('favBoards').style.display='none';
        document.getElementById('trainingTips').style.display='none';
        document.getElementById('monthlyPup').style.display='block';
        document.getElementById('mayRecap').style.display='none';
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