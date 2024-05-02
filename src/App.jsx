import "./App.css";
import CoreStrength from "./Sections/CoreStrength/CoreStrength";

import Footer from "./Sections/Footer";
import GuidanceTab from "./Sections/GuidanceTab/GuidanceTab";
import Header from "./Sections/Header";
import Banner from "./Sections/HomeSections/Banner";
import LatestNews from "./Sections/LatestNews/LatestNews";

function App() {
  return ( 
    <div>
      <Header />
      <Banner />
      <GuidanceTab />
      <CoreStrength />
      <LatestNews/>
      <Footer />
    </div>
  );
}

export default App;
