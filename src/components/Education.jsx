import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div>
      <div>
        {education.map((item) => {
          return (
            <div className="underline" key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p >{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;