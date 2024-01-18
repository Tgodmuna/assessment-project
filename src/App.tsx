import Automation from "./components/Automation/Automation";
import AboutDelievry from "./components/ClientSection/AboutDelievry";
import Client from "./components/ClientSection/CLIENT";
import CLIENTDiscounts from "./components/ClientSection/CLIENTDiscounts";
import Explore from "./components/Explore/Explore";
import FAQ__UI from "./components/FAQ/FAQ__UI";
import Header from "./components/Header/Header";
import Hero from "./components/Hero_section/Hero";
import Info from "./components/InforSection/Info";
import Pricing from "./components/Pricing/Pricing";
import RiskTolerance from "./components/RiskTolerance/RiskTolerance";

function App() {
  return (
    <div className='App min-h-screen  '>
      <Header />
      <Hero  />
      <RiskTolerance />
      <Explore />
      <Automation />
      <Pricing />
      <Info />
      <Client />
      <CLIENTDiscounts />
      <AboutDelievry />
      <FAQ__UI/>
    </div>
  );
}

export default App;
