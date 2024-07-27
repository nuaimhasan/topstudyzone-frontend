import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAcademyMCQQuery } from "../../../../../../Redux/api/academy/mcqApi";
import { useGetAcademyWrittenQuery } from "../../../../../../Redux/api/academy/writtenApi";

export default function Subject({ subject }) {
  let query = {};
  query["subject"] = subject?._id;
  const { data } = useGetAcademyMCQQuery({ ...query });
  const mcqs = data?.data;
  const { data: written } = useGetAcademyWrittenQuery({ ...query });
  const writtens = written?.data;

  return (
    <div className="flex items-center gap-5 bg-base-100 shadow rounded px-2 py-4">
      <FaBook className="text-neutral-content text-2xl sm:text-4xl" />
      <div>
        <Link
          to={`/academy/subject-${subject?._id}/chapters`}
          className="hover:text-secondary duration-200 text-sm sm:text-lg mb-2"
        >
          {subject?.name}
        </Link>
        <div className="mt-1 grid grid-cols-2 md:grid-cols-3 gap-2 text-[10px]">
          <Link
            to={`/academy/mcq?subject=${subject?._id}`}
            className="bg-gray-100 p-1 rounded text-neutral-content"
          >
            MCQ ({mcqs?.length})
          </Link>
          <Link
            to={`/academy/written?subject=${subject?._id}`}
            className="bg-gray-100 p-1 rounded text-neutral-content"
          >
            Written ({writtens?.length})
          </Link>
        </div>
      </div>
    </div>
  );
}
