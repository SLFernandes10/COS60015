import React from 'react';

function Training() {

    function openTrainingTips(event) {    
        document.getElementById('asideImg').style.display='none';
        document.getElementById('whereNext').style.display='none';
        document.getElementById('favBoards').style.display='none';
        document.getElementById('trainingTips').style.display='block';
        document.getElementById('monthlyPup').style.display='none';
        document.getElementById('mayRecap').style.display='none';
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