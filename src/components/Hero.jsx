import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div >
    <div className="portrait">
      <img className="hero" src={hero.image} alt="Gonzalo Estebarena" />
      </div>
      <div>
        <h2 className="portrait">
          {hero.name} 
        </h2>
        </div>
        <div className="card">
        <p>{hero.adress}</p>
        <p>πΊοΈ{hero.city} </p>
        <p>ποΈ{hero.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + hero.email}>gonesteb@gmail.com</a>
        </p>
        <p>π± {hero.phone}</p>
        <p>
          πΎ<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
