import { Link, useLocation } from "react-router-dom";
import WrittenCard from "./WrittenCard";

export default function WrittenF() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subjectId = queryParams.get("subject");
  const chapterId = queryParams.get("chapter");

  return (
    <div>
      <section className="grid grid-cols-3 items-start gap-6">
        <div className="col-span-2 rounded overflow-hidden">
          <div className="bg-secondary text-base-100 text-center py-4">
            <h2 className="text-xl font-semibold mb-1">বাংলা</h2>
            <p className="text-sm">একাদশ- দ্বাদশ শ্রেণি - বাংলা | NCTB BOOK</p>
          </div>

          <div className="p-2 bg-base-100 flex justify-center gap-3 uppercase text-[10px] font-semibold">
            <Link
              to={`/academy/subject-${subjectId}/chapters`}
              className="bg-gray-100 px-4 py-2 rounded hover:bg-secondary hover:text-base-100 duration-300"
            >
              view chapter
            </Link>
            <Link
              to={`/academy/mcq?subject=${subjectId}`}
              className="bg-gray-100 px-4 py-2 rounded hover:bg-secondary
              hover:text-base-100 duration-300"
            >
              view MCQ
            </Link>
          </div>

          <div className="mt-4">
            <ul className="flex flex-col gap-6">
              <li>
                <WrittenCard />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
