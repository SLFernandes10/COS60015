import React, { useState } from "react";

function Newsletter() {

  function openRegForm(event) {
    document.getElementById('pop-up-form').style.display = 'block';
    document.getElementById('register-button').style.display = 'none';
    document.getElementById('regtext').style.display = 'none';
  }

  function closeRegForm(event) {
    document.getElementById('pop-up-form').style.display = 'none';
    document.getElementById('register-button').style.display = 'flex';
    document.getElementById('regtext').style.display = 'flex';
  }

  function confirmed (event) {
    alert('Thank you for signing up!');
    closeRegForm ();
  }

  return (
    <div className="newsletter">
    <button className="navbtn" id="register-button" onClick={openRegForm}><img src="./images/envelope.png" height="50px" /></button>
        <p id="regtext"> Never miss an update! Sign-up for our monthly newsletter to receive updates on competitions, champions, and more!</p>
        <div class="form" id="pop-up-form">
            <h1>Newsletter Sign-Up</h1>
            <label for="email"><b>Email Address</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />
            <button type="submit" id="btn" onClick={confirmed}>Sign-Up!</button>
            <button type="button" id="btn-cancel" onClick={closeRegForm}>Cancel</button>
        </div>
    </div>
  );
}

export default Newsletter;