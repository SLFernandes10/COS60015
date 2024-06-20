import React from "react";
import NewsCarousel from "./NewsCarousel";
import PupOfMonth from "./PupOfMonth";
import Training from "./Training";

const Main = (AsideElementIds) => { 
    return (
      <div>
        <NewsCarousel />
        <PupOfMonth />
        <Training />
      </div>
    );
  };
  
  export default Main;