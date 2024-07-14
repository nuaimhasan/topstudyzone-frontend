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
        title: "Contents",
        path: "/admin/academy/contents",
      },
      {
        title: "MCQ",
        path: "/admin/academy/mcq",
      },
      {
        title: "Writtens",
        path: "/admin/academy/writtens",
      },
    ],
  },

  {
    icon: <FaReadme />,
    title: "Admission",
    subMenu: [
      {
        title: "Subject Wise",
        subSubMenu: [
          {
            title: "Subjects",
            path: "/admin/admission/subject/subjects",
          },
          {
            title: "Chapters",
            path: "/admin/admission/subject/chapter",
          },
          {
            title: "Contents",
            path: "/admin/admission/subject/content",
          },
        ],
      },
      {
        title: "University Wise",
        subSubMenu: [
          {
            title: "Universities",
            path: "/admin/admission/university/universities",
          },
          {
            title: "Question Set",
            path: "/admin/admission/university/question-set",
          },
        ],
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
        title: "Subject Wise",
        subSubMenu: [
          {
            title: "Subjects",
            path: "/admin/admission/job/subjects",
          },
          {
            title: "Chapters",
            path: "/admin/admission/job/chapter",
          },
          {
            title: "Contents",
            path: "/admin/admission/job/content",
          },
        ],
      },
      {
        title: "Institute Wise",
        subSubMenu: [
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
        title: "MCQ",
        path: "/admin/institute/mcq",
      },
      {
        title: "Written",
        path: "/admin/institute/written",
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
