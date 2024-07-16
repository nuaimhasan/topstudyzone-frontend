import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../../../Components/Loader/Spinner/Spinner";
import { toast } from "react-toastify";
import {
  useGetSingleAdmissionChapterQuery,
  useUpdateAdmissionChapterMutation,
} from "../../../../../Redux/api/admission/chapterApi";
import { useGetAdmissionSubjectsQuery } from "../../../../../Redux/api/admission/subjectApi";

export default function AdmissionEditChapter() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetSingleAdmissionChapterQuery(id);
  const { data: subject } = useGetAdmissionSubjectsQuery();

  const [updateAdmissionChapter, { isLoading: editLoading }] =
    useUpdateAdmissionChapterMutation();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const subject = e.target.subject.value;

    const info = { name, subject };

    const res = await updateAdmissionChapter({ id, info });
    if (res?.data?.success) {
      toast.success("chapter update success");
      navigate("/admin/admission/chapters");
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
        <h2>Edit Admission Chapter</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleUpdate}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Chapter Name</p>
              <input
                type="text"
                name="name"
                required
                defaultValue={data?.data?.name}
              />
            </div>

            <div>
              <p className="mb-1.5">Subject</p>
              <select
                name="subject"
                required
                defaultValue={data?.data?.subject?._id}
              >
                {subject?.data?.map((subject) => (
                  <option key={subject?._id} value={subject?._id}>
                    {subject?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div disabled={editLoading && "disabled"} className="mt-4">
            <button className="secondary_btn">
              {editLoading ? "Loading..." : "Edit Chapter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
