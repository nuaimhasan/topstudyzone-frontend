import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddAdmissionChapterMutation } from "../../../../../Redux/api/admission/chapterApi";
import { useGetAdmissionSubjectsQuery } from "../../../../../Redux/api/admission/subjectApi";

export default function AdmissionAddChapter() {
  const navigate = useNavigate();
  const { data } = useGetAdmissionSubjectsQuery();

  const [addAdmissionChapter, { isLoading }] = useAddAdmissionChapterMutation();

  const handleAdd = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const subject = e.target.subject.value;

    const info = { name, subject };

    const res = await addAdmissionChapter(info);
    if (res?.data?.success) {
      toast.success("chapter add success");
      navigate("/admin/admission/chapters");
    } else {
      toast.error("something went wrong!");
    }
  };

  return (
    <div className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h2>Add Admission Chapter</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleAdd}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5">Chapter Name</p>
              <input type="text" name="name" required />
            </div>
            <div>
              <p className="mb-1.5">Subject</p>
              <select name="subject" required>
                {data?.data?.map((subject) => (
                  <option key={subject?._id} value={subject?._id}>
                    {subject?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <button className="secondary_btn">
              {isLoading ? "Loading..." : "Add Chapter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
