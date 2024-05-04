import Navbar from "./components/header/navbar";
import "./App.css";
import HeroBG from "./components/heroSection/hero";
import About from "./components/Aboutsection/about";
import Customer from "./components/testimonial/customer";
import Team from "./components/Team/team";
import END from "./components/END/end";
import Services from "./components/b2page/services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBG />
      <About />
      <Services/>
      <Team />
      <Customer />
      
      <END />
    </div>
  );
}

export default App;
