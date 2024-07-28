import { Link } from "react-router-dom";

export default function SubjectCard({ subject }) {
  return subject?.subjects?.map((s) => (
    <Link
      key={s?._id}
      to={`/admission/question-bank/`}
      className="bg-gray-100 rounded px-1 py-px"
    >
      {s?.subject?.name}
      <span className="bg-neutral text-base-100 rounded-full px-1 py-px ml-1">
        {s?.mcqs?.length}
      </span>
    </Link>
  ));
}
