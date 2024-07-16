import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleAdmissionSubjectQuery,
  useUpdateAdmissionSubjectMutation,
} from "../../../../../Redux/api/admission/subjectApi";
import Spinner from "../../../../../Components/Loader/Spinner/Spinner";
import { toast } from "react-toastify";

export default function AdmissionEditSubject() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleAdmissionSubjectQuery(id);
  const subject = data?.data;

  const [updateAdmissionSubject, { isLoading: editLoading }] =
    useUpdateAdmissionSubjectMutation();

  const handleAdd = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const info = { name };

    const res = await updateAdmissionSubject({ id, info });
    if (res?.data?.success) {
      toast.success("subject update success");
      navigate("/admin/admission/subjects");
    } else {
      toast.error("something went wrong!");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Edit Admission Subject</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleAdd}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Subject Name</p>
              <input
                type="text"
                name="name"
                required
                defaultValue={subject?.name}
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              className="secondary_btn"
              disabled={editLoading && "disabled"}
            >
              {editLoading ? "Loading..." : "Update Subject"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
