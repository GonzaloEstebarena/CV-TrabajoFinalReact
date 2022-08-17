import React from "react";
import "./more.scss";
const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="accenter">
      <div class="accordion">
        <input type="radio" name="select" class="accordion-select" checked />
        <div class="accordion-title">
          <span>Languages</span>
        </div>
        <div class="accordion-content">
          <div>
            <p>{languages.language}</p>
            <p>{languages.wrlevel}</p>
            <p>{languages.splevel}</p>
          </div>
        </div>
        <input type="radio" name="select" class="accordion-select" />
        <div class="accordion-title">
          <span>Habilities</span>
        </div>
        <div class="accordion-content">
          <div>
            <div className="habilities">
              <p>{habilities}</p>
            </div>
          </div>
        </div>
        <input type="radio" name="select" class="accordion-select" />
        <div class="accordion-title">
          <span>Volunteer</span>
        </div>
        <div class="accordion-content">
          <div>
            {volunteer.map((item) => {
              return (
                <div key={JSON.stringify(item)}>
                  <p> {item.name}</p>
                  <p> {item.where}</p>
                  <p> {item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
