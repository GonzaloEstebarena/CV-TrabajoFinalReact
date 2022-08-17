import React from "react";
import AboutMe from "../About";
import { CV } from "../../CV/CV";
const { hero } = CV;


const AboutsMe = () => {
  return (
    <div>
      
      <div>
        <AboutMe hero={hero.aboutMe} />
      </div>
    </div>
  );
};

export default AboutsMe;
