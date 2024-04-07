import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full flex flex-col py-10 bg-slate-800 text-gray-50">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-6 gap-2">
          <Link
            className="text-xl font-bold cursor-pointer"
            to="/"
          >{`<ReviewAI />`}</Link>

          <div className="flex flex-col gap-2 col-span-3 items-start">
            <h5 className="text-lg font-bold">Pages</h5>
            <ul className="w-full flex flex-col gap-2">
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
          </div>

          <div className="flex flex-col gap-1 items-start col-span-2">
            <h5 className="text-lg font-bold">Subscribe</h5>
            <div className="w-full flex flex-col gap-2">
              <p>
                Subscribe to our newsletter for the latest updates and helpful
                tips on using AI support software.
              </p>
              <form className="w-full flex gap-2 items-center">
                <input
                  className="flex-1 h-10 rounded-md px-4 bg-gray-300 text-gray-900 placeholder:text-gray-800"
                  type="email"
                  placeholder="Enter your email address"
                />
                <Button
                  className="bg-transparent transition hover:bg-transparent hover:border-gray-300 hover:text-gray-300"
                  variant="outline"
                  type="submit"
                >
                  Subscribe
                </Button>
              </form>

              <p>
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4 text-sm">
            <p>© 2024 dangLong. All rights reserved.</p>
            <Link
              className="transition hover:underline hover:text-gray-300"
              to="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="transition hover:underline hover:text-gray-300"
              to="#"
            >
              Terms of Service
            </Link>
            <Link
              className="transition hover:underline hover:text-gray-300"
              to="#"
            >
              Cookie Settings
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Facebook className="transition hover:text-gray-300" size={20} />
            <Instagram className="transition hover:text-gray-300" size={20} />
            <Twitter className="transition hover:text-gray-300" size={20} />
            <Linkedin className="transition hover:text-gray-300" size={20} />
            <Youtube className="transition hover:text-gray-300" size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
