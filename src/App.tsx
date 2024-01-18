import { createContext } from "vm";
import Automation from "./components/Automation/Automation";
import AboutDelievry from "./components/ClientSection/AboutDelievry";
import Client from "./components/ClientSection/CLIENT";
import CLIENTDiscounts from "./components/ClientSection/CLIENTDiscounts";
import Explore from "./components/Explore/Explore";
import FAQ__UI from "./components/FAQ/FAQ__UI";
import FOOTER from "./components/Footer/FOOTER";
import Header from "./components/Header/Header";
import Hero from "./components/Hero_section/Hero";
import Info from "./components/InforSection/Info";
import Pricing from "./components/Pricing/Pricing";
import RiskTolerance from "./components/RiskTolerance/RiskTolerance";
import React, { useState } from "react";

//context type
type contextType = {
  setisFooterHovered: React.Dispatch<React.SetStateAction<boolean>>;
  isFooterHovered: boolean;
};

//context definition
export const Context = React.createContext<undefined | contextType>(undefined);

function App() {
  const [isFooterHovered, setisFooterHovered] = useState<boolean>(false);

  return (
    <Context.Provider value={{ isFooterHovered, setisFooterHovered }}>
      <div className='App min-h-screen  '>
        <Header />
        <Hero />
        <RiskTolerance />
        <Explore />
        <Automation />
        <Pricing />
        <Info />
        <Client />
        <CLIENTDiscounts />
        <AboutDelievry />
        <FAQ__UI />
        <FOOTER />
      </div>
    </Context.Provider>
  );
}

export default App;
