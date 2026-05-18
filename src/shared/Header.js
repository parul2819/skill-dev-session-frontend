import {useContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router";
import UserContext from "../utils/UserContext";
import {setDark, setLight} from "@utils/themeSlice";
import { APP_LOGO_URL } from "@utils/constants"

const Header = () => { 

  const { userName, email, phone, setUserName } = useContext(UserContext);
  const dispatch = useDispatch()
  const cartItems = useSelector(store => store.cart.items);
  const isDarkMode = useSelector(store => store.theme.isDarkMode);
  const [ showThemeMenu, setShowThemeMenu ] = useState(false)
  const linkClass = `block rounded-md px-3 py-2 transition-colors ${
    isDarkMode
      ? "text-slate-100 hover:bg-slate-800 hover:text-white"
      : "text-slate-700 hover:bg-rose-100 hover:text-slate-950"
  }`;
  console.log('cartItems - ', cartItems)
  //
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setUserName("User from Header")
  // }, 3000)
  //     return () => clearTimeout(timer)
  // }, [setUserName])

  return (
  <div>
    <div id="header" className={`fixed top-0 z-20 flex h-[64px] w-[calc(100%-32px)] items-center justify-between border-b px-4 shadow-sm backdrop-blur
    ${isDarkMode ? "border-slate-800 bg-slate-950/90 text-slate-100" : "border-rose-100 bg-gradient-to-r from-rose-50/95 via-white to-sky-50/95 text-slate-900"}`} >

      <div id="logo" className="h-[44px] w-[44px] overflow-hidden rounded-full ring-1 ring-rose-100 shadow-sm">
        <img className="h-full w-full rounded-full object-cover"
          alt="app logo"
          src={APP_LOGO_URL}
        />
      </div>

    <div id="menu-items">
      <ul className="flex list-none items-center gap-2 text-sm font-medium">
          <li><Link className={linkClass} to="/">Home</Link></li>
          <li><Link className={linkClass} to="/about">About</Link></li>
          <li className={linkClass}>Login</li>
          <li><Link className={linkClass} to="/cart">Cart - { cartItems.length }</Link></li>
          <li><Link className={linkClass} to="/">{ userName }</Link></li>
          <li className="relative">
              <button
                type="button"
                className={`rounded-md px-3 py-2 transition-colors ${
                  isDarkMode
                    ? "text-slate-100 hover:bg-slate-800 hover:text-white"
                    : "text-slate-700 hover:bg-rose-100 hover:text-slate-950"
                }`}
                onClick={() => setShowThemeMenu(!showThemeMenu)}
              >
                Theme
              </button>
              <div className={`${showThemeMenu ? "block" : "hidden"} absolute right-0 top-full mt-2 flex flex-col rounded-xl border shadow-md ${isDarkMode ? "border-slate-700 bg-slate-950 text-slate-100" : "border-rose-100 bg-white text-slate-900"}`}>
                  <button type="button" className="px-3 py-2 text-left transition-colors hover:bg-sky-50" onClick={() => { dispatch(setLight()); setShowThemeMenu(false); }}>Light</button>
                  <button type="button" className="px-3 py-2 text-left transition-colors hover:bg-rose-50" onClick={() => { dispatch(setDark()); setShowThemeMenu(false); }}>Dark</button>
              </div>
          </li>
      </ul>
    </div>
  </div>
  </div>
  );
};

export default Header;
