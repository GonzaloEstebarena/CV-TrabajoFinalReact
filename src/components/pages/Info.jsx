

import React from "react";
import Hero from "../Hero";
import { CV } from "../../CV/CV";
const { hero } = CV;

const Contact = () => {
  return (
    <div>
      
      <div>
        <Hero hero={hero} />
      </div>
    </div>
  );
};

export default Contact;