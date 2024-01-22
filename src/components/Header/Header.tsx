import Login from "../Auth/Login";
import { Button } from "../Shared/Button";
import { Logo } from "./Logo";
import Navlink from "./Navlink";

const Header = () => {
  return (
    <header className='flex justify-between items-center w-[100vw] bg-inherit md:mt-1 h-[4rem] bg-gradient-to-b from-slate-400 to-lightOrange'>
      <Logo />
      <Navlink />
      <div className='md:flex hidden  w-[20rem] justify-center items-center '>
        <Login />
        <Button width='10rem'>Get started</Button>
      </div>
    </header>
  );
};
export default Header;
