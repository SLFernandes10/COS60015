import React from "react";

const Navigation = () => {
  const navItems = ["Upcoming Events", "Updates and News", "Meet Our Champions", "History of Dog Surfing"];
  const navList = navItems.map((nav,index) => <li key={index}><a href="">{nav}</a></li>);
  return (
    <div className="navigation">
      <div>
      <form className="searchflex">
        <input type="text" placeholder="Search" />
        <button type="submit" className="searchbtn"><img src="/images/mag.png" height="20px" /></button>
      </form>
      <ul>{navList}</ul>
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