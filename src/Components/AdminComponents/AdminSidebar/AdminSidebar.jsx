import { Link } from "react-router-dom";

import {
  MdMonitor,
  MdOutlineDashboard,
  MdFeaturedPlayList,
} from "react-icons/md";
import { FaSchool, FaReadme } from "react-icons/fa";

import { RiAdminFill } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbPackages } from "react-icons/tb";
import { IoSchool } from "react-icons/io5";

import SidebarItems from "./SidebarItems";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },

  {
    icon: <FaSchool />,
    title: "Academy",
    subMenu: [
      {
        title: "Categories",
        path: "/admin/academy/categories",
      },
      {
        title: "Classes",
        path: "/admin/academy/classes",
      },
      {
        title: "Subjects",
        path: "/admin/academy/subjects",
      },
      {
        title: "Chapters",
        path: "/admin/academy/chapters",
      },
      {
        title: "Content",
        path: "/admin/academy/contents",
      },
      {
        title: "Model Test",
        path: "/admin/academy/modeltest",
      },
    ],
  },

  {
    icon: <FaReadme />,
    title: "Admission",
    subMenu: [
      {
        title: "Categories",
        path: "/admin/admission/categories",
      },
      {
        title: "Model Test",
        path: "/admin/admission/modeltest",
      },
    ],
  },

  {
    icon: <IoSchool />,
    title: "Job",
    subMenu: [
      {
        title: "Categories",
        path: "/admin/admission/categories",
      },
      {
        title: "Model Test",
        path: "/admin/admission/modeltest",
      },
    ],
  },

  {
    icon: <MdFeaturedPlayList />,
    title: "Features",
    path: "/admin/features",
  },

  {
    icon: <TbPackages />,
    title: "Packages",
    path: "/admin/packages",
  },

  {
    icon: <RiAdminFill />,
    title: "Administrator",
    path: "/admin/admins",
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
        title: "Banner",
        path: "/admin/front-end/banner",
      },
      {
        title: "About",
        path: "/admin/front-end/about",
      },
      {
        title: "Contact",
        path: "/admin/front-end/contact",
      },
    ],
  },

  {
    icon: <IoMdSettings />,
    title: "General Setting",
    subMenu: [
      {
        title: "profile",
        path: "/admin/general-setting/profile",
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
