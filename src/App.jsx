import "./App.scss";
// import Video from './components/aaaaa';
import { Route,  Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import MoreMore from "./components/pages/Moremore";
import Joblife from "./components/pages/Joblife";
import Contact from "./components/pages/Contact";
import AboutsMe from "./components/pages/AboutMe";
import Info from "./components/pages/Info";
import DigitalClock from "./components/DigitalClock";
import DigitalDate from "./components/DigitalDate";

// import IndividualIntervalsExample from './components/Carousel'

 // import Video from "./components/VideoBG"; <Video/>
// import videoBG from './assets/internet_technology_futuristic_waves_935.mp4'

function App() {
  return (
    
    <div className="app">
    
      <div className="reloj">
        <DigitalClock />
        <DigitalDate className="fecha" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblife" element={<Joblife />} />
        <Route path="/moremore" element={<MoreMore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutsMe />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
