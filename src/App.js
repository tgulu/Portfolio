import Contact from "./components/Contact";
import Portfolios from "./components/Portfolios";
import Homes2 from "./components/Homes2";

function App() {
  return (
    // Check what div does
    <div className="px-4 md:px-60 ">
      <Homes2 />

      <Portfolios />
      <Contact />

      {/* <Portfolio /> */}
      {/* <Homes /> */}

      {/* <NavBar />


       */}
    </div>
  );
}

export default App;
