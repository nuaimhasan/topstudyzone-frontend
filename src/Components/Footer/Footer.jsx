import { Link } from "react-router-dom";
import Logo from "/src/assets/images/logo/logo.png";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-accent pt-10 pb-5">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-14">
          <div>
            <img src={Logo} alt="logo" className="w-48 md:w-56" />
          </div>

          <div>
            <h2 className="text-gray-300 text-xl font-medium">Quick Link</h2>
            <ul className="text-gray-400 font-light pl-2 mt-2 flex flex-col gap-1.5 text-[15px]">
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-gray-300 text-xl font-medium">TSZ POLICY</h2>
            <ul className="text-gray-400 font-light pl-2 mt-2 flex flex-col gap-1.5 text-[15px]">
              <li>
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-gray-300 text-xl font-medium">
              SUBSCRIBE OUR NEWSLETTER
            </h2>
            <form className="mt-2">
              <div className="flex text-sm">
                <input
                  type="text"
                  name=""
                  className="rounded-r-none"
                  placeholder="example@gmail.com"
                />
                <button className="rounded-r bg-primary text-base-100 px-4 py-2">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t pt-5">
          <div className="sm:flex justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              Copyright © 2024 Top Study Zone, All rights reserved. develop by{" "}
              <Link
                to="https://emanagerit.com"
                target="_blank"
                className="underline"
              >
                eManager
              </Link>
            </p>

            <div className="flex gap-3 items-center">
              <Link
                to=""
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <BiLogoFacebook className="text-xl" />
              </Link>
              <Link
                to=""
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <BiLogoLinkedin className="text-xl" />
              </Link>
              <Link
                to=""
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <FaTwitter className="text-lg" />
              </Link>
              <Link
                to=""
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link
                to=""
                target="_blank"
                className="w-7 h-7 rounded-full bg-primary/50 flex justify-center items-center text-base-100 hover:-mt-1 duration-200"
              >
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
