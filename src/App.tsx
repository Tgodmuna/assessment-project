import React, { Suspense, lazy, useState } from "react";
import { MobileSideBar } from "./components/Header/Header";

const Automation = lazy(() => import("./components/Automation/Automation"));
const AboutDelievry = lazy(
  () => import("./components/ClientSection/AboutDelievry"),
);
const Client = lazy(() => import("./components/ClientSection/CLIENT"));
const CLIENTDiscounts = lazy(
  () => import("./components/ClientSection/CLIENTDiscounts"),
);
const Explore = lazy(() => import("./components/Explore/Explore"));
const FAQ__UI = lazy(() => import("./components/FAQ/FAQ__UI"));
const FOOTER = lazy(() => import("./components/Footer/FOOTER"));
const Header = lazy(() => import("./components/Header/Header"));
const Hero = lazy(() => import("./components/Hero_section/Hero"));
const Info = lazy(() => import("./components/InforSection/Info"));
const Pricing = lazy(() => import("./components/Pricing/Pricing"));
const RiskTolerance = lazy(
  () => import("./components/RiskTolerance/RiskTolerance"),
);

//context type
type contextType = {
  setisFooterHovered: React.Dispatch<React.SetStateAction<boolean>>;
  isFooterHovered: boolean;
};

//context definition
export const Context = React.createContext<undefined | contextType>(undefined);

function App() {
  const [isFooterHovered, setisFooterHovered] = useState<boolean>(false);
  const [isMobileActive, setisMobileActive] = useState(false);
  const handleisActive = () => {
    setisMobileActive(!isMobileActive);
    return isMobileActive
  };
  return (
    <Context.Provider  value={{ isFooterHovered, setisFooterHovered }}>
      <div className='App'>
        <Suspense fallback={<div>Loading...</div>}>
          <Header handleActive={handleisActive} />
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
          {isMobileActive && <MobileSideBar handleActive={handleisActive} />}
        </Suspense>
      </div>
    </Context.Provider>
  );
}

export default App;
