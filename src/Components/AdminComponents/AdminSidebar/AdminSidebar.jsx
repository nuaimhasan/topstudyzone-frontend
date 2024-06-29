import { Link } from "react-router-dom";

import {
  MdMonitor,
  MdOutlineDashboard,
  MdOutlineCategory,
} from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import SidebarItems from "./SidebarItems";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },

  {
    icon: <MdOutlineCategory />,
    title: "Categories",
    subMenu: [
      {
        title: "Categories",
        path: "/admin/categories/categories",
      },
      {
        title: "Sub Categories",
        path: "/admin/categories/sub-categories",
      },
      {
        title: "Sub Sub Categories",
        path: "/admin/categories/sub-sub-categories",
      },
    ],
  },

  {
    icon: <RiAdminFill />,
    title: "Administrator",
    path: "/admin/administrator/all-administrator",
  },

  {
    icon: <MdMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Favicon",
        path: "/admin/front-end/favicon",
      },
      {
        title: "Banner",
        path: "/admin/front-end/banner",
      },
      {
        title: "Themes",
        path: "/admin/front-end/themes",
      },
    ],
  },

  {
    icon: <IoMdSettings />,
    title: "General Setting",
    subMenu: [
      {
        title: "Business Info",
        path: "/admin/general-setting/business-info",
      },
      {
        title: "Other Services",
        path: "/admin/general-setting/other-services",
      },
    ],
  },

  {
    icon: <FaChartLine />,
    title: "SEO Setting",
    path: "/admin/seo",
  },
];

export default function AdminSidebar() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <nav className="admin_siderbar">
          <Link to="/admin/dashboard" className="py-3 block">
            <img
              src="/src/assets/images/logo/logo.png"
              alt="logo"
              className="w-3/5 mx-auto"
            />
          </Link>

          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
