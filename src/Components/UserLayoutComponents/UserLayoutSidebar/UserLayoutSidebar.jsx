import { Link } from "react-router-dom";
import UserSidebarLists from "./UserSidebarLists";
import { MdOutlineLogin } from "react-icons/md";

export default function UserLayoutSidebar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <Link to="/" className="block pt-1">
          <img
            src="/src/assets/images/logo/logo.png"
            alt="logo"
            className="w-2/3 mx-auto"
          />
        </Link>

        <nav className="sidebar_lists mt-6 h-[78vh] overflow-y-auto">
          <UserSidebarLists />
        </nav>
      </div>
      <div>
        <Link
          to="/login"
          className="w-full flex gap-2 items-center justify-center bg-secondary text-base-100 px-4 py-2 rounded"
        >
          <MdOutlineLogin className="text-lg" />
          Login Now
        </Link>
      </div>
    </div>
  );
}
