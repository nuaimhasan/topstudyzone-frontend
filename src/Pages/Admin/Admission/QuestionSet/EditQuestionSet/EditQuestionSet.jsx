import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleAdmissionQuestionSetQuery,
  useUpdateAdmissionQuestionSetMutation,
} from "../../../../../Redux/api/admission/questionSetApi";
import { useGetAdmissionUniversitiesQuery } from "../../../../../Redux/api/admission/universityApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function EditQuestionSet() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data } = useGetSingleAdmissionQuestionSetQuery(id);

  let [year, setYear] = useState("");
  let [selectedUniversity, setSelectedUniversity] = useState("");

  useEffect(() => {
    if (data?.data) {
      setYear(data?.data?.year);
      setSelectedUniversity(data?.data?.university);
    }
  }, [data]);

  const { data: university } = useGetAdmissionUniversitiesQuery();
  const universities = university?.data;

  const [updateAdmissionQuestionSet, { isLoading }] =
    useUpdateAdmissionQuestionSetMutation();
  const handleEdit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const university = e.target.university.value;
    const year = e.target.year.value;

    const info = {
      name,
      year,
      university,
    };

    const res = await updateAdmissionQuestionSet({ id, info });
    if (res?.data?.success) {
      toast.success("Question set edit success");
      navigate("/admin/admission/question-set");
    } else {
      Swal.fire("", "something went wrong!", "error");
      console.log(res);
    }
  };

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Edit Question Set</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleEdit} className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">University</p>
              <select
                name="university"
                required
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.target.value)}
              >
                {universities?.map((u) => (
                  <option key={u?._id} value={u?._id}>
                    {u?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Year</p>
              <select name="year" required value={year}>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          <div>
            <p className="mb-1.5">Question Set Name</p>
            <textarea name="name" defaultValue={data?.data?.name}></textarea>
          </div>

          <div>
            <button
              disabled={isLoading && "disabled"}
              className="secondary_btn"
            >
              {isLoading ? "Loading..." : "Edit Question Set"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
