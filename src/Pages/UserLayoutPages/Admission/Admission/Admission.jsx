import { Link } from "react-router-dom";
import "/src/assets/css/Admission.css";
import { useState } from "react";
import { FaBook } from "react-icons/fa";

export default function Admission() {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div>
      <section className="py-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center section_line italic">
          ক্যাটাগরি ভিত্তিক
        </h2>

        <div className="mt-4 sm:mt-8 flex justify-center items-center gap-2 text-sm">
          <button
            onClick={() => setSelectedCategory(1)}
            className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
              selectedCategory == 1 && "bg-secondary text-base-100"
            }`}
          >
            বিষয়ভিত্তিক
          </button>
          <button
            onClick={() => setSelectedCategory(2)}
            className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
              selectedCategory == 2 && "bg-secondary text-base-100"
            }`}
          >
            সালভিত্তিক
          </button>
          <button
            onClick={() => setSelectedCategory(3)}
            className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
              selectedCategory == 3 && "bg-secondary text-base-100"
            }`}
          >
            গ্রুপভিত্তিক
          </button>
          <button
            onClick={() => setSelectedCategory(4)}
            className={`px-4 py-3 border rounded hover:bg-secondary hover:text-base-100 duration-300 ${
              selectedCategory == 4 && "bg-secondary text-base-100"
            }`}
          >
            সাম্প্রতিক বিষয়
          </button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="flex items-center gap-5 bg-base-100 shadow rounded px-2 py-4">
            <FaBook className="text-neutral-content text-2xl sm:text-4xl" />
            <div>
              <Link
                to={``}
                className="hover:text-secondary duration-200 text-sm sm:text-base"
              >
                Bangla
              </Link>
              <div className="mt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  MCQ (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Written (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Exams (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Chapters (0)
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-base-100 shadow rounded px-2 py-4">
            <FaBook className="text-neutral-content text-2xl sm:text-4xl" />
            <div>
              <Link
                to={``}
                className="hover:text-secondary duration-200 text-sm sm:text-base"
              >
                English
              </Link>
              <div className="mt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  MCQ (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Written (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Exams (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Chapters (0)
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-base-100 shadow rounded px-2 py-4">
            <FaBook className="text-neutral-content text-2xl sm:text-4xl" />
            <div>
              <Link
                to={``}
                className="hover:text-secondary duration-200 text-sm sm:text-base"
              >
                Math
              </Link>
              <div className="mt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  MCQ (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Written (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Exams (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Chapters (0)
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-base-100 shadow rounded px-2 py-4">
            <FaBook className="text-neutral-content text-2xl sm:text-4xl" />
            <div>
              <Link
                to={``}
                className="hover:text-secondary duration-200 text-sm sm:text-base"
              >
                ইসলাম শিক্ষা
              </Link>
              <div className="mt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  MCQ (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Written (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Exams (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Chapters (0)
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-base-100 shadow rounded px-2 py-4">
            <FaBook className="text-neutral-content text-2xl sm:text-4xl" />
            <div>
              <Link
                to={``}
                className="hover:text-secondary duration-200 text-sm sm:text-base"
              >
                আন্তজার্তিক বিষয়াবলী
              </Link>
              <div className="mt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  MCQ (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Written (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Exams (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Chapters (0)
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-base-100 shadow rounded px-2 py-4">
            <FaBook className="text-neutral-content text-2xl sm:text-4xl" />
            <div>
              <Link
                to={``}
                className="hover:text-secondary duration-200 text-sm sm:text-base"
              >
                ইতিহাস
              </Link>
              <div className="mt-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  MCQ (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Written (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Exams (0)
                </Link>
                <Link
                  to={``}
                  className="bg-gray-100 p-1 rounded text-neutral-content"
                >
                  Chapters (0)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
