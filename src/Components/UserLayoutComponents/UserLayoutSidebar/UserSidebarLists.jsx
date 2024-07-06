import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { TiBusinessCard, TiStarburst } from "react-icons/ti";
import { PiExam, PiStudent } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { MdNoteAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaQuestion, FaRegStar } from "react-icons/fa";
import { TbPackages } from "react-icons/tb";

export default function UserSidebarLists() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/home">
            <FiHome />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/discussions">
            <FaRegCircleQuestion />
            Ask Question?
          </NavLink>
        </li>

        <li>
          <NavLink to="/business-account">
            <TiBusinessCard />
            Business Account
          </NavLink>
        </li>
      </ul>

      <ul className="mt-5">
        <h2 className="text-neutral/80 mb-2">Exam</h2>
        <li>
          <NavLink to="/exam-list">
            <PiExam />
            Exam List
          </NavLink>
        </li>

        <li>
          <NavLink to="/exam-result">
            <PiExam />
            Exam Result
          </NavLink>
        </li>
      </ul>

      <ul className="mt-5">
        <h2 className="text-neutral/80 mb-2">Categories</h2>
        <li>
          <NavLink to="/academy">
            <BiCategory />
            Academy
          </NavLink>
        </li>

        <li>
          <NavLink to="/admission">
            <BiCategory />
            Admission
          </NavLink>
        </li>
        <li>
          <NavLink to="/job-assistant">
            <BiCategory />
            Job Assistant
          </NavLink>
        </li>
        <li>
          <NavLink to="/skill-development">
            <BiCategory />
            Skill Development
          </NavLink>
        </li>

        <li>
          <NavLink to="/book-collection">
            <BiCategory />
            Book Collection
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <BiCategory />
            Video Content
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <BiCategory />
            Blog Content
          </NavLink>
        </li>
      </ul>

      <ul className="mt-5">
        <h2 className="text-neutral/80 mb-2">GENERAL</h2>
        <li>
          <NavLink to="/">
            <PiStudent />
            Study Plan
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <MdNoteAlt />
            Hand Note
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <IoNotifications />
            Notice
          </NavLink>
        </li>
      </ul>

      <ul className="mt-5">
        <h2 className="text-neutral/80 mb-2">Others</h2>
        <li>
          <NavLink to="/">
            <FaQuestion />
            FAQ
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <TbPackages />
            Package
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <TiStarburst />
            Point
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <FaRegStar />
            Feedback
          </NavLink>
        </li>
      </ul>
    </>
  );
}
