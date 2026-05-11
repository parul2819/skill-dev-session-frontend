import {useContext, useEffect} from "react";
import { APP_LOGO_URL } from "../utils/constants"
import {Link} from "react-router";
import UserContext from "../utils/UserContext";

const Header = () => { 

  const { userName, email, phone, setUserName } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserName("User from Header")
  }, 3000)
      return () => clearTimeout(timer)
  }, [setUserName])

  return (
  <div>
    <div id="header" className="flex p-4 justify-between h-[60px]
    fixed bg-white w-[calc(100%-32px)] z-[1]
    shadow-[5px_5px_8px_aliceblue]" >

      <div id="logo" className="w-[50px] h-[50px]">
        <img className="w-[50px] h-[50px] rounded-full"
          alt="app logo"
          src={APP_LOGO_URL}
        />
      </div>

    <div id="menu-items">
      <ul className="flex list-none">
          <li className="p-[10px] m-[0px_10px] cursor-pointer hover:text-orange-600"><Link to="/">Home</Link></li>
          <li className="p-[10px] m-[0px_10px] cursor-pointer hover:bg-violet-600"><Link to="/about">About</Link></li>
          <li className="p-[10px] m-[0px_10px] cursor-pointer hover:bg-violet-600">Login</li>
          <li className="p-[10px] m-[0px_10px] cursor-pointer hover:bg-violet-600"><Link to="/cart">Cart</Link></li>
          <li className="p-[10px] m-[0px_10px] cursor-pointer hover:bg-violet-600"><Link to="/">{ userName }</Link></li>
      </ul>
    </div>
  </div>
  </div>
  );
};

export default Header;