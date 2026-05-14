import {useContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router";
import UserContext from "../utils/UserContext";
import {setDark, setLight} from "../utils/themeSlice";
import { APP_LOGO_URL } from "../utils/constants"

const Header = () => { 

  const { userName, email, phone, setUserName } = useContext(UserContext);
  const dispatch = useDispatch()
  const cartItems = useSelector(store => store.cart.items);
  const isDarkMode = useSelector(store => store.theme.isDarkMode);
  const [ showThemeMenu, setShowThemeMenu ] = useState(false)
  console.log('cartItems - ', cartItems)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setUserName("User from Header")
  // }, 3000)
  //     return () => clearTimeout(timer)
  // }, [setUserName])

  return (
  <div>
    <div id="header" className={`flex p-4 justify-between h-[60px]
    fixed w-[calc(100%-32px)] z-[1]
    shadow-[5px_5px_8px_aliceblue]
    ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`} >

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
          <li className="p-[10px] m-[0px_10px] cursor-pointer hover:bg-violet-600"><Link to="/cart">Cart - { cartItems.length }</Link></li>
          <li className="p-[10px] m-[0px_10px] cursor-pointer hover:bg-violet-600"><Link to="/">{ userName }</Link></li>
          <li className="relative p-[10px] m-[0px_10px] cursor-pointer hover:bg-violet-600">
              <button type="button" onClick={() => setShowThemeMenu(!showThemeMenu)}>Theme</button>
              <div className={`${showThemeMenu ? "block" : "hidden"} absolute top-full right-0 mt-2 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} border shadow-md flex flex-col z-10 `}>
                  <button type="button" className="px-3 py-2 text-left hover:bg-violet-600" onClick={() => dispatch(setLight())}>Light</button>
                  <button type="button" className="px-3 py-2 text-left hover:bg-violet-600" onClick={() => dispatch(setDark())}>Dark</button>
              </div>
          </li>
      </ul>
    </div>
  </div>
  </div>
  );
};

export default Header;
