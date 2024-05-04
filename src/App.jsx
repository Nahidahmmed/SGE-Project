import "./App.css";
import ConnectUs from "./Sections/ConnectUs/ConnectUs";
import CoreStrength from "./Sections/CoreStrength/CoreStrength";
import Destination from "./Sections/Destination/Destination";

import Footer from "./Sections/Footer";
import GuidanceTab from "./Sections/GuidanceTab/GuidanceTab";
import Header from "./Sections/Header";
import Banner from "./Sections/HomeSections/Banner";
import LatestNews from "./Sections/LatestNews/LatestNews";
import { Reviews } from "./Sections/Reviews/Reviews";

function App() {
  return ( 
    <div>
      <Header />
      <Banner />
      <GuidanceTab />
      <CoreStrength />
      <LatestNews/>
      {/* <Reviews/> */}
      <ConnectUs/>
      <Destination/>
      <Footer />
    </div>
  );
}

export default App;
