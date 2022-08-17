import React from 'react'
import Education from '../Education'
import Experience from '../Experience'
import { CV } from '../../CV/CV'
import { useDispatch, useSelector } from "react-redux"

import { ed, exp } from '../../redux/buttons/buttons.actions'
const { education, experience } = CV;

const Joblife = () => {
   
const {showEducation}=useSelector((state)=>state.showEducation);
const dispatch=useDispatch();

  return (
    <div>
    <div>
      <button
              className="myButton"
              onClick={() => dispatch(ed())}
            >
              Education
            </button>
            <button
              className="myButton"
              onClick={() => dispatch(exp())}
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
