import { FaBookmark, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ExamResult() {
  return (
    <div>
      <section className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-base-100 rounded overflow-hidden shadow">
          <div className="bg-primary text-base-100 p-4 flex justify-between items-center">
            <h2 className="text-xl font-medium">Result Summary</h2>
            <Link
              to="/exam"
              className="bg-red-700 text-base-100 px-4 py-1.5 rounded text-sm"
            >
              Exam List
            </Link>
          </div>

          <div className="mt-4 p-4 grid grid-cols-2 gap-4 text-[13px] lg:w-4/5 mx-auto">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-base-100 p-2 rounded">
                <FaQuestion />
              </div>
              <div>
                <p>0</p>
                <p className="text-neutral-content">TOTAL QUESTION</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-secondary text-base-100 p-2 rounded">
                <FaBookmark />
              </div>
              <div>
                <p>0</p>
                <p className="text-neutral-content">TOTAL MARK</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-secondary text-base-100 p-2 rounded">
                <FaBookmark />
              </div>
              <div>
                <p>0</p>
                <p className="text-neutral-content">PASS MARK</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-secondary text-base-100 p-2 rounded">
                <FaBookmark />
              </div>
              <div>
                <p>0 min.</p>
                <p className="text-neutral-content">DURATION</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-secondary text-base-100 p-2 rounded">
                <FaBookmark />
              </div>
              <div>
                <p>0</p>
                <p className="text-neutral-content">NEGATIVE MARK</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-secondary text-base-100 p-2 rounded">
                <FaBookmark />
              </div>
              <div>
                <p>20-12-2024</p>
                <p className="text-neutral-content">EXAM DATE</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
