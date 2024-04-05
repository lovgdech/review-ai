import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function MainNavigation() {
  const [showBgNav, setShowBgNav] = useState(window.scrollY > 100);
  const [showNavbar, setShowNavbar] = useState(window.scrollY < 100);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setShowBgNav(true);
      } else {
        setShowBgNav(false);
      }

      if (prevScrollY < currentScrollY && currentScrollY > 100)
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
              className={`${({ isActive }) =>
                isActive
                  ? "underline"
                  : ""} text-base hover:text-gray-300 hover:underline`}
              to="about-us"
              end
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${({ isActive }) =>
                isActive
                  ? "underline"
                  : ""} text-base hover:text-gray-300 hover:underline`}
              to="ai-tools"
              end
            >
              AI tools
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${({ isActive }) =>
                isActive
                  ? "underline"
                  : ""} text-base hover:text-gray-300 hover:underline`}
              to="blogs"
              end
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${({ isActive }) =>
                isActive
                  ? "underline"
                  : ""} text-base hover:text-gray-300 hover:underline`}
              to="contact"
              end
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div>
          <Button
            className="text-base h-9 bg-transparent border rounded-md border-gray-300"
            variant="outline"
          >
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
