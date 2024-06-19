import React from "react";
import NewsCarousel from "./NewsCarousel";
import PupOfMonth from "./PupOfMonth";
import Training from "./Training";

const Main = () => { 
    return (
      <div>
        <NewsCarousel />
        <PupOfMonth />
        <Training />
      </div>
    );
  };
  
  export default Main;