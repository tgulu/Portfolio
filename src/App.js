import Contact from "./components/Contact";
import Portfolios from "./components/Portfolios";
import Homes2 from "./components/Homes2";
import Blur from "./components/Blur";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Global Blur Background */}
      <Blur />

      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-60">
        <Homes2 />
        <Portfolios />
        <Contact />
      </div>
    </div>
  );
}

export default App;
