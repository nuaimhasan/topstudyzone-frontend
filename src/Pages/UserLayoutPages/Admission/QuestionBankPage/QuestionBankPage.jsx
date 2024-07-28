import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetAdmissionUniversitiesQuery,
  useGetSingleAdmissionUniversityQuery,
} from "../../../../Redux/api/admission/universityApi";

import { useGetAdmissionAllQuestionSetQuery } from "../../../../Redux/api/admission/questionSetApi";
import SetCard from "./SetCard";

export default function QuestionBankPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const universityId = queryParams.get("university");
  const { data } = useGetSingleAdmissionUniversityQuery(universityId);
  let university = data?.data;

  const { data: universityData } = useGetAdmissionUniversitiesQuery();
  const universities = universityData?.data;

  let setQuery = {};
  setQuery["university"] = universityId;
  const { data: set } = useGetAdmissionAllQuestionSetQuery({ ...setQuery });
  let questionSets = set?.data;

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

        <div className="mt-5 flex flex-col gap-4">
          {questionSets?.map((set) => (
            <SetCard key={set?._id} set={set} />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}
