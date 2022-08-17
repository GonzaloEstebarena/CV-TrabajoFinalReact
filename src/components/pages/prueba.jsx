import React from 'react'
import Education from '../Education'
import Experience from '../Experience'
import { CV } from '../../CV/CV'
import { useState } from "react"
const { education, experience } = CV;

const Joblife = () => {
    const [showEducation, setShowEducation] = useState(true);
  return (
    <div>
    <div>
      <button
              className="myButton"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="myButton"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            </div>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
        
        
      </div>
</div>
  )
}

export default Joblife