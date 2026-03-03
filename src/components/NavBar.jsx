import { useLocation, useNavigate } from "react-router-dom";
import CommonList from "./common/CommonList";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const logoRef = useRef();
  const btnRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 Cart count from Redux
  const { amount } = useSelector((state) => state.cart);

  const NavBarTabs = [
    { label: "SHOP", path: "/shop", isActive: location.pathname === "/shop" },
    { label: "ABOUT", path: "/about", isActive: location.pathname === "/about" },
    { label: "JOURNAL", path: "/journal", isActive: location.pathname === "/journal" },
  ];

  useGSAP(() => {
    gsap.from(logoRef.current, { opacity: 0, x: 50, duration: 1.2 });
    gsap.from(btnRef.current, { opacity: 0, x: -50, duration: 1.2 });
  });

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="w-full bg-white border-b border-black/10">
      <div  className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1
          ref={logoRef}
          onClick={() => navigate("/home")}
          className="
            cursor-pointer text-lg sm:text-xl
            font-medium tracking-[0.25em]
            select-none
          "
        >
          STUDIO POLLY
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <CommonList
            tabs={NavBarTabs}
            styleContainer="flex gap-16"
            styleTab="
              list-none cursor-pointer text-xs tracking-[0.25em] text-black/80
              hover:text-black transition relative
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-black
              after:transition-all after:duration-300
              hover:after:w-full
            "
            isActive="text-black after:w-full"
          />
        </nav>

        {/* Actions */}
        <div ref={btnRef} className="hidden lg:flex items-center gap-8">
          {/* <FaRegHeart size={26} className="cursor-pointer hover:opacity-60" /> */}

          {/* Cart Icon with Count */}
          <div onClick={() => navigate("/cart")} className="relative cursor-pointer hover:opacity-60">
            <BsCart4 size={26} />
            {amount > 0 && (
              <span className="
                absolute -top-2 -right-2
                bg-orange-500 text-white text-xs
                w-5 h-5 flex items-center justify-center
                rounded-full
              ">
                {amount}
              </span>
            )}
          </div>

          <RiLogoutCircleRLine
            size={22}
            className="cursor-pointer hover:opacity-60"
            onClick={handleLogOut}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-8 space-y-6">
          <CommonList
            tabs={NavBarTabs}
            styleContainer="flex flex-col gap-6 text-center"
            styleTab="text-sm tracking-[0.25em] cursor-pointer"
            isActive="font-semibold"
          />

          <div className="flex justify-center gap-8 pt-6">
            {/* <FaRegHeart size={22} /> */}

            {/* Mobile Cart */}
            <div className="relative">
              <BsCart4 size={22} />
              {amount > 0 && (
                <span className="
                  absolute -top-2 -right-2
                  bg-orange-500 text-white text-[10px]
                  w-4 h-4 flex items-center justify-center
                  rounded-full
                ">
                  {amount}
                </span>
              )}
            </div>

            <RiLogoutCircleRLine size={22} onClick={handleLogOut} />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
