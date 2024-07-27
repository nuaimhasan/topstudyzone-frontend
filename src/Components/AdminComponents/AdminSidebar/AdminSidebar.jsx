import { Link } from "react-router-dom";
import Logo from "/src/assets/images/logo/logo.png";

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
import { BiSolidReceipt } from "react-icons/bi";
import { RiListCheck3 } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

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
        title: "Chapter",
        subSubMenu: [
          { title: "Chapters", path: "/admin/academy/chapters" },
          { title: "Sub Chapters", path: "/admin/academy/sub-chapters" },
          {
            title: "Sub Sub Chapters",
            path: "/admin/academy/sub-sub-chapters",
          },
        ],
      },
      {
        title: "Contents",
        path: "/admin/academy/contents",
      },
    ],
  },

  {
    icon: <FaReadme />,
    title: "Admission",
    subMenu: [
      {
        title: "Universities",
        path: "/admin/admission/universities",
      },
      {
        title: "Question Set",
        path: "/admin/admission/question-set",
      },
      {
        title: "MCQ",
        path: "/admin/admission/mcq",
      },
      {
        title: "Written",
        path: "/admin/admission/written",
      },
    ],
  },

  {
    icon: <IoSchool />,
    title: "Job Assistant",
    subMenu: [
      {
        title: "Institutes",
        path: "/admin/admission/institute/institutes",
      },
      {
        title: "Question Set",
        path: "/admin/admission/institute/question-set",
      },
    ],
  },

  {
    icon: <RiListCheck3 />,
    title: "MCQ",
    subMenu: [
      {
        title: "All MCQ",
        path: "/admin/mcq/all",
      },
      {
        title: "Add MCQ",
        path: "/admin/mcq/add",
      },
    ],
  },

  {
    icon: <CgNotes />,
    title: "Written",
    subMenu: [
      {
        title: "All Written",
        path: "/admin/written/all",
      },
      {
        title: "Add Written",
        path: "/admin/written/add",
      },
    ],
  },

  {
    icon: <BiSolidReceipt />,
    title: "Current Affairs",
    path: "/admin/features",
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
            <img src={Logo} alt="logo" className="w-3/5 mx-auto" />
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
