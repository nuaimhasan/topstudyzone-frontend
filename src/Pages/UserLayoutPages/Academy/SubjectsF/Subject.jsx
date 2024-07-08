import { FaBook, FaPrint } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAcademyMCQQuery } from "../../../../Redux/api/academy/mcqApi";

export default function Subject({ subject }) {
  const subjectId = subject?._id;
  const { data } = useGetAcademyMCQQuery(subjectId);

  return (
    <>
      <li className="flex justify-between items-center border-b pb-6">
        <div className="flex items-center gap-5">
          <FaBook className="text-neutral-content text-4xl" />
          <div>
            <Link
              to={`/academy/subject-${subjectId}/chapters`}
              className="hover:text-secondary duration-200"
            >
              {subject?.name}
            </Link>
            <div className="mt-1 flex items-center gap-16 text-xs">
              <Link
                to={`/academy/subject-${subjectId}/mcq`}
                className="bg-gray-100 p-1 rounded text-neutral-content"
              >
                MCQ ({data?.data?.length})
              </Link>
              <Link
                to=""
                className="bg-gray-100 p-1 rounded text-neutral-content"
              >
                Written (0)
              </Link>
            </div>
          </div>
        </div>

        <div>
          <button className="flex items-center gap-2 text-sm text-neutral">
            <FaPrint /> Print
          </button>
        </div>
      </li>
    </>
  );
}
