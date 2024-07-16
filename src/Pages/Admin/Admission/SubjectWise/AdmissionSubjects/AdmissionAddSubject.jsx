import { toast } from "react-toastify";
import { useAddAdmissionSubjectMutation } from "../../../../../Redux/api/admission/subjectApi";
import { useNavigate } from "react-router-dom";

export default function AdmissionAddSubject() {
  const navigate = useNavigate();
  const [addAdmissionSubject, { isLoading }] = useAddAdmissionSubjectMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    const info = {
      name,
    };

    const res = await addAdmissionSubject(info);
    if (res?.data?.success) {
      toast.success("subject add success");
      navigate("/admin/admission/subjects");
    } else {
      toast.error("something went wrong!");
    }
  };

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Admission Subject</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleAdd}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Subject Name</p>
              <input type="text" name="name" required />
            </div>
          </div>

          <div className="mt-4">
            <button
              disabled={isLoading && "disabled"}
              className="secondary_btn"
            >
              {isLoading ? "Loading..." : "Add Subject"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
