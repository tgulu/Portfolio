import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Blur from "./components/Blur";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Global Blur Background */}
      <Blur />

      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-60">
        <Home />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
