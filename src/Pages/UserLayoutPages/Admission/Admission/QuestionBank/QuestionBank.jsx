import { Link } from "react-router-dom";
import { useGetAdmissionUniversitiesQuery } from "../../../../../Redux/api/admission/universityApi";
import { FaUniversity } from "react-icons/fa";

export default function QuestionBank() {
  const { data } = useGetAdmissionUniversitiesQuery();
  const universities = data?.data;

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center section_line italic">
        প্রশ্ন ব্যাংক
      </h2>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {universities?.map((university) => (
          <Link
            to={`/admission/question-bank?university=${university?._id}`}
            key={university?._id}
            className="rounded shadow bg-base-100 p-4 hover:bg-primary/10 duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-8 flex justify-center items-center bg-secondary rounded">
                <FaUniversity className="text-lg text-base-100" />
              </div>
              <h2>{university?.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
