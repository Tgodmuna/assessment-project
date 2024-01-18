import Login from "../Auth/Login";
import { Button } from "../Shared/Button";
import { Logo } from "./Logo";
import Navlink from "./Navlink";

const Header = () => {
  return (
    <header className='flex justify-between items-center w-[100vw] bg-inherit mt-1 h-[4rem] '>
      <Logo />
      <Navlink />
      <div className='flex  w-[20rem] justify-center items-center '>
        <Login />
        <Button width='10rem'>Get started</Button>
      </div>
    </header>
  );
};
export default Header;
