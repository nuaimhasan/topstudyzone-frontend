import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserLayoutHeader({ setUserSidebar }) {
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".d_btn")) {
        setDropdown(false);
      }
    });
  }, []);

  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50 py-3 px-6 bg-base-100 text-neutral shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setUserSidebar(true)}
            className="user_sidebar_btn lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm text-neutral/80">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>

              <li>
                <NavLink to="/academy">Academy</NavLink>
              </li>

              <li>
                <NavLink to="/admission">Adminssion</NavLink>
              </li>

              <li>
                <NavLink to="/job-assistant">Job Assistant</NavLink>
              </li>

              <li>
                <NavLink to="/skill">Skill</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="relative">
          <button className="d_btn flex items-center gap-2">
            <img
              src="/images/demo.jpg"
              alt=""
              className="w-8 h-8 rounded-full "
              onClick={() => setDropdown(!dropdown)}
            />
          </button>

          {dropdown && (
            <div className="absolute top-[140%] right-0 w-40 bg-base-100 rounded shadow p-2">
              <button
                onClick={() => dispatch(userLogout())}
                className="hover:bg-gray-100 text-red-500 w-full text-start px-2 py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
