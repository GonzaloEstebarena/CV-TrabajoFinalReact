import React from 'react'
import videoBG from '../assets/internet_technology_futuristic_waves_935.mp4'

const Video=()=>{
    return(
        <div className="videoBG">
        <video  autoPlay loop src={videoBG}  />
      </div>
    )
}

export default Video