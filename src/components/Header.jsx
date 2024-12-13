import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { useAuthStore } from "../store/store";
// import images / svg's
// import logo from "../assets/logo.svg"
import logo from "../assets/White Black Elegant Beauty Salon Logo (8).png";
import Logout from "../assets/logout.svg";
import User from "../assets/user.svg";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";

const Header = () => {
  axios.defaults.withCredentials = true;
  const { privateData, isLoggedIn, logout, getCart, cart } = useAuthStore();
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  console.log(isLoggedIn);
  useEffect(() => {
    privateData();
    getCart(localStorage.getItem("user"));
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 mx-auto w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="max_padd_container px-4 flexBetween py-3 max-xs:px-2">
        {/* logo */}
        <div>
          {/* 66 88 */}
          <Link>
            <img src={logo} alt="" height={50} width={50} />
          </Link>
        </div>
        {/* Navbar Desktop*/}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        {/* buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full "
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full "
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            {isLoggedIn && (
              <NavLink to={"cart-page"} className={"flex"}>
                <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
                <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                  {cart?.length}
                </span>
              </NavLink>
            )}

            {isLoggedIn ? (
              <NavLink
                onClick={() => {
                  logout();
                  window.location.replace("/login");
                }}
                to={"logout"}
                className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
              >
                <img src={Logout} alt="logutIcon" height={19} width={19} />
                Logout
              </NavLink>
            ) : (
              <NavLink
                to={"login"}
                className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
              >
                <img src={User} alt="userIcon" height={19} width={19} />
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
