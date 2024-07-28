import { toast } from "react-toastify";
import { useAddAdmissionQuestionSetMutation } from "../../../../../Redux/api/admission/questionSetApi";
import { useGetAdmissionUniversitiesQuery } from "../../../../../Redux/api/admission/universityApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddQuestionSet() {
  const navigate = useNavigate();
  const { data } = useGetAdmissionUniversitiesQuery();
  const universities = data?.data;

  const [addAdmissionQuestionSet, { isLoading }] =
    useAddAdmissionQuestionSetMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const university = e.target.university.value;
    const year = e.target.year.value;

    const info = {
      name,
      year,
      university,
    };

    const res = await addAdmissionQuestionSet(info);
    if (res?.data?.success) {
      toast.success("Question set add success");
      navigate("/admin/admission/question-set");
    } else {
      Swal.fire("", "something went wrong!", "error");
      console.log(res);
    }
  };

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Question Set</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleAdd} className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="mb-1">University</p>
              <select name="university" required>
                {universities?.map((u) => (
                  <option key={u?._id} value={u?._id}>
                    {u?.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1">Year</p>
              <select name="year" required>
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
            <p className="mb-1">Set Name</p>
            <textarea name="name"></textarea>
          </div>

          <div>
            <button
              disabled={isLoading && "disabled"}
              className="secondary_btn"
            >
              {isLoading ? "Loading..." : "Add Question Set"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
