import "/src/assets/css/Header.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLogin, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target.closest(".menu_wrap ul li a") &&
        !e.target.closest(".menu_wrap ul li a svg")
      ) {
        setMobileMenu(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    });
  }, []);

  return (
    <header
      className={`py-2 xl:py-0 sticky top-0 z-[50] ${
        fixedHeader && "fixed_header"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="/src/assets/images/logo/logo.png"
              alt="logo"
              className="w-32 sm:w-44"
            />
          </Link>

          <div className="flex items-center gap-4">
            <nav className="menu_wrap flex items-center gap-2">
              <button
                onClick={() => setMobileMenu(false)}
                className={`overlay 2xl:hidden ${mobileMenu && "overlay_show"}`}
              ></button>

              <ul className={`${mobileMenu && "show"}`}>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/academy">SCHOOL</NavLink>
                </li>
                <li>
                  <NavLink to="/admission">ADMISSION</NavLink>
                </li>
                <li>
                  <NavLink to="/home">JOB SOLUTION</NavLink>
                </li>
                <li>
                  <NavLink to="/home">SKILL DEVELOPMENT</NavLink>
                </li>
                <li>
                  <button>
                    More <MdOutlineKeyboardArrowDown className="text-lg" />
                  </button>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/login" className="login_btn">
                <MdOutlineLogin className="text-lg" />
                Sign In
              </Link>

              <button onClick={() => setMobileMenu(true)} className="lg:hidden">
                <AiOutlineMenu
                  className={`text-2xl  ${!fixedHeader && "text-base-100"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
