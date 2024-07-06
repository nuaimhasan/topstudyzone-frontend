import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function PackageCard() {
  return (
    <div className="px-4 py-10 bg-gray-100 rounded">
      <h2 className="text-center text-2xl sm:text-3xl text-neutral font-bold">
        BASIC
      </h2>

      <div className="mt-4 sm:mt-8">
        <p className="text-neutral-content text-xs text-center">
          Starting from <span className="text-secondary text-xl">৳</span>
          <del className="text-lg sm:text-xl text-red-500"> 99</del>{" "}
          <span className="text-secondary text-2xl sm:text-4xl">49</span>/ Month
        </p>

        <Link
          to=""
          className="text-sm sm:text-base mt-2 block w-3/5 mx-auto text-center bg-secondary py-2 rounded text-base-100"
        >
          View Plan
        </Link>
      </div>

      <ul className="mt-8 text-sm sm:text-[15px] text-neutral/80 flex flex-col gap-2">
        <li className="flex justify-between items-center">
          <p>Free Model Test</p>
          <p className="rounded-full bg-primary/70 p-1 text-[10px] text-base-100">
            <FaCheck />
          </p>
        </li>

        <li className="flex justify-between items-center">
          <p>Paid Model Test (Vendor)</p>
          <p className="rounded-full bg-red-500/70 p-1 text-xs text-base-100">
            <IoClose />
          </p>
        </li>

        <li className="flex justify-between items-center">
          <p>Free Model Test</p>
          <p className="rounded-full bg-primary/70 p-1 text-[10px] text-base-100">
            <FaCheck />
          </p>
        </li>

        <li className="flex justify-between items-center">
          <p>Free Model Test</p>
          <p className="rounded-full bg-primary/70 p-1 text-[10px] text-base-100">
            <FaCheck />
          </p>
        </li>

        <li className="flex justify-between items-center">
          <p>Free Model Test</p>
          <p className="rounded-full bg-primary/70 p-1 text-[10px] text-base-100">
            <FaCheck />
          </p>
        </li>

        <li className="flex justify-between items-center">
          <p>Paid Model Test (Vendor)</p>
          <p className="rounded-full bg-red-500/70 p-1 text-xs text-base-100">
            <IoClose />
          </p>
        </li>

        <li className="flex justify-between items-center">
          <p>Free Model Test</p>
          <p className="rounded-full bg-primary/70 p-1 text-[10px] text-base-100">
            <FaCheck />
          </p>
        </li>

        <li className="flex justify-between items-center">
          <p>Free Model Test</p>
          <p className="rounded-full bg-primary/70 p-1 text-[10px] text-base-100">
            <FaCheck />
          </p>
        </li>
      </ul>

      <div className="mt-10 text-center">
        <p className="text-sm text-neutral-content">
          To Purchase a Package, please
        </p>
        <Link
          to="/login"
          className="text-sm bg-secondary px-6 py-2 rounded text-base-100 mt-2 block w-max mx-auto"
        >
          Login Now
        </Link>
      </div>
    </div>
  );
}
