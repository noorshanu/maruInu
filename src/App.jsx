import Navbar from "components/Navbar";
import About from "sections/About";

import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";

import Roadmap from "sections/Roadmap";
import Pool from "sections/Pool";
import Disclaim from "sections/Disclaim";
import Token from "sections/Token";
import Roadmapv from "sections/Roadmapv";


function App() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="relative z-10">
          <Navbar />

          <div className=" ">
            <Hero />
          </div>
        </div>

        <div className="" id="about">
          <About />
        </div>
        <div id="story">
          <Roadmap />
        </div>

        <div id="pool">
          <Pool/>
        </div>
        <div id="token">
          <Token/>
        </div>

        <div>

          <Roadmapv/>
        </div>
        <div id="disclaimer">
          <Disclaim/>
        </div>
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
