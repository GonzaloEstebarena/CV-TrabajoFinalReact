import React from "react";

const Video = () => {
    return (
      <video  autoPlay loop   >
       
        <source src={require('../assets/internet_technology_futuristic_waves_935.mp4')  } type="video/mp4" 
        />
        Sorry, your browser doesn't support videos.
      </video>
    );
  };
  
  export default Video;