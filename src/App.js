import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Homes from "./components/Homes";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <Homes />
      {/* <SocialLinks /> */}
      {/* <About /> */}
      <Portfolio />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
}

export default App;
