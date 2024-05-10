import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function MainNavigation() {
  const [showBgNav, setShowBgNav] = useState(window.scrollY > 50);
  const [showNavbar, setShowNavbar] = useState(window.scrollY < 50);

  const navigate = useNavigate();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setShowBgNav(true);
      } else {
        setShowBgNav(false);
      }

      if (prevScrollY < currentScrollY && currentScrollY > 50)
        setShowNavbar(false);
      else setShowNavbar(true);
      prevScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 text-white ${
        showBgNav && "bg-gradient-to-r from-gray-900 to-slate-900 opacity-85"
      } ${showNavbar ? "block" : "hidden"}`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 py-6 sm:px-6 lg:px-8 flex items-center gap-8">
        <Link
          className="text-xl font-bold cursor-pointer"
          to="/"
        >{`<ReviewAI />`}</Link>

        <ul className="flex flex-1 justify-end items-center gap-6">
          <li>
            <NavLink
              className={`text-base hover:text-gray-300 hover:underline ${({
                isActive,
              }) => (isActive ? "text-gray-300 underline" : "")} `}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`text-base hover:text-gray-300 hover:underline ${({
                isActive,
              }) => (isActive ? "text-gray-300 underline" : "")} `}
              to="/about-us"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`text-base hover:text-gray-300 hover:underline ${({
                isActive,
              }) => (isActive ? "text-gray-300 underline" : "")} `}
              to="/ai-tools"
            >
              AI tools
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className={`text-base hover:text-gray-300 hover:underline ${({
                isActive,
              }) => (isActive ? "text-gray-300 underline" : "")} `}
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className={`text-base hover:text-gray-300 hover:underline ${({
                isActive,
              }) => (isActive ? "text-gray-300 underline" : "")} `}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div>
          <SignedOut>
            <SignInButton>
              <Button className="text-base h-9 bg-transparent border rounded-md border-gray-300">
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
