import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useGetAdmissionUniversitiesQuery,
  useGetSingleAdmissionUniversityQuery,
} from "../../../../Redux/api/admission/universityApi";
import { FaUniversity } from "react-icons/fa";

export default function QuestionBankPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const universityId = queryParams.get("university");
  const { data } = useGetSingleAdmissionUniversityQuery(universityId);
  let university = data?.data;

  const { data: universityData } = useGetAdmissionUniversitiesQuery();
  const universities = universityData?.data;

  const handleUniversityChange = (event) => {
    const selectedUniversityId = event.target.value;
    navigate(`/admission/question-bank?university=${selectedUniversityId}`);
  };

  return (
    <div className="grid lg:grid-cols-7 gap-4">
      <div className="lg:col-span-5">
        <div className="bg-primary text-base-100 p-6 rounded-t text-center">
          <h2 className="text-xl font-medium">
            QUESTION BANK || {university?.name}
          </h2>
        </div>

        <div className="my-4 flex justify-center text-xs">
          <button className="px-6 py-2 bg-primary text-base-100">MCQ</button>
          <button className="px-6 py-2 bg-gray-200">Written</button>
        </div>

        <div className="flex justify-between items-center text-sm text-neutral">
          <div>
            <p className="mb-1">Filter University</p>
            <select value={university?._id} onChange={handleUniversityChange}>
              <option value="All">All</option>
              {universities?.map((u) => (
                <option key={u?._id} value={u?._id}>
                  {u?.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="mb-1">Filter Year</p>
            <select>
              <option value="All">All</option>
              {universities?.map((u) => (
                <option key={u?._id} value={u?._id}>
                  {u?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <div className="bg-base-100 rounded shadow p-4 hover:bg-secondary/5 duration-300">
            <div className="flex items-start gap-4">
              <div className="w-11 h-10 flex justify-center items-center bg-secondary rounded">
                <FaUniversity className="text-lg text-base-100" />
              </div>

              <div>
                <div className="flex items-center gap-1">
                  <Link to={``} className="hover:text-primary duration-200">
                    <h2>
                      আন্ডারগ্র্যাজুয়েট প্রোগ্রাম ভর্তি পরীক্ষা || গার্হস্থ্য
                      অর্থনীতি ইউনিট (25-05-2024) ২০২৩-২০২৪
                    </h2>
                  </Link>
                  <span className="bg-secondary px-1 py-px rounded text-base-100 text-[10px]">
                    2024
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 text-[11px] mt-1">
                  <Link to={``} className="bg-gray-100 rounded px-1 py-px">
                    Bangla
                    <span className="bg-neutral text-base-100 rounded-full px-1 py-px ml-1">
                      0
                    </span>
                  </Link>
                  <Link to={``} className="bg-gray-100 rounded px-1 py-px">
                    EngLish
                    <span className="bg-neutral text-base-100 rounded-full px-1 py-px ml-1">
                      0
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
